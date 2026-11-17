// smithy-typescript generated code
import type {
  Action,
  AzureEventHubTier,
  AzureTelemetryType,
  CentralizationFailureReason,
  ConnectorProvider,
  ContextGraphStatus,
  DeletionProtection,
  DestinationType,
  EncryptedLogGroupStrategy,
  EncryptionConflictResolutionStrategy,
  EncryptionScope,
  EncryptionStrategy,
  FilterBehavior,
  FilterRequirement,
  IntegrationStatus,
  LogType,
  MskEnhancedMonitoringLevel,
  OutputFormat,
  RecordFormat,
  ResourceType,
  RuleHealth,
  SetupFormat,
  SignalType,
  SSEAlgorithm,
  Status,
  TagConflictResolutionStrategy,
  TagPropagationFailureReason,
  TagPropagationStatus,
  TelemetryEnrichmentStatus,
  TelemetryPipelineStatus,
  TelemetrySourceType,
  TelemetryState,
  TelemetryType,
  ThirdPartyTelemetryEnrichmentStatus,
  ThirdPartyTelemetrySource,
  WAFLogType,
} from "./enums";

/**
 * <p> Condition that matches based on the specific WAF action taken on the request. </p>
 * @public
 */
export interface ActionCondition {
  /**
   * <p> The WAF action to match against (ALLOW, BLOCK, COUNT, CAPTCHA, CHALLENGE, EXCLUDED_AS_COUNT). </p>
   * @public
   */
  Action?: Action | undefined;
}

/**
 * <p> Defines criteria for selecting resources based on field values. </p>
 * @public
 */
export interface AdvancedFieldSelector {
  /**
   * <p> The name of the field to use for selection. </p>
   * @public
   */
  Field: string | undefined;

  /**
   * <p> Matches if the field value equals the specified value. </p>
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * <p> Matches if the field value starts with the specified value. </p>
   * @public
   */
  StartsWith?: string[] | undefined;

  /**
   * <p> Matches if the field value ends with the specified value. </p>
   * @public
   */
  EndsWith?: string[] | undefined;

  /**
   * <p> Matches if the field value does not equal the specified value. </p>
   * @public
   */
  NotEquals?: string[] | undefined;

  /**
   * <p> Matches if the field value does not start with the specified value. </p>
   * @public
   */
  NotStartsWith?: string[] | undefined;

  /**
   * <p> Matches if the field value does not end with the specified value. </p>
   * @public
   */
  NotEndsWith?: string[] | undefined;
}

/**
 * <p>Advanced event selectors let you create fine-grained selectors for management, data, and network activity events.</p>
 * @public
 */
export interface AdvancedEventSelector {
  /**
   * <p>An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Contains all selector statements in an advanced event selector.</p>
   * @public
   */
  FieldSelectors: AdvancedFieldSelector[] | undefined;
}

/**
 * <p>Selects every Azure subscription that Azure role-based access control (Azure RBAC) allows the connector to read. Subscriptions that the connector can read later are included automatically.</p>
 * @public
 */
export interface AllSubscriptions {}

/**
 * <p>Configuration for Flow Log Storage Accounts that the setup creates, one in each Region that ingests Flow Logs.</p>
 * @public
 */
export interface AzureAwsManagedFlowLogs {
  /**
   * <p>The number of days that the created Storage Accounts keep Flow Logs.</p>
   * @public
   */
  RetentionDays: number | undefined;
}

/**
 * <p>The configuration of a connector to Microsoft Azure.</p>
 * @public
 */
export interface AzureConnectorConfiguration {
  /**
   * <p>The ID of the Microsoft Entra ID tenant.</p>
   * @public
   */
  TenantIdentifier: string | undefined;

  /**
   * <p>The application (client) ID of the Azure app registration. The app registration must have a federated identity credential that trusts the Amazon Web Services OpenID Connect (OIDC) issuer for your account.</p>
   * @public
   */
  ClientIdentifier: string | undefined;
}

/**
 * <p>Limits a query to a management group or to specific subscriptions.</p>
 * @public
 */
export interface AzureQueryScope {
  /**
   * <p>Limits the query to resources under this management group.</p>
   * @public
   */
  ManagementGroupId?: string | undefined;

  /**
   * <p>Limits the query to these subscriptions. You can specify 1–1000 subscriptions.</p>
   * @public
   */
  SubscriptionIds?: string[] | undefined;
}

/**
 * <p>A query that lists Azure Event Hubs.</p>
 * @public
 */
export interface AzureEventHubsQuery {
  /**
   * <p>Limits the query to a management group or to specific subscriptions.</p>
   * @public
   */
  Scope?: AzureQueryScope | undefined;

  /**
   * <p>Limits the results to Event Hubs in this namespace.</p>
   * @public
   */
  NamespaceName?: string | undefined;

  /**
   * <p>Limits the results to one Azure Region, for example <code>eastus</code>.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>A query that lists Azure management groups.</p>
 * @public
 */
export interface AzureManagementGroupsQuery {
  /**
   * <p>Lists the management groups under this management group. If you omit this value, the query starts at the tenant root group.</p>
   * @public
   */
  ParentManagementGroupId?: string | undefined;
}

/**
 * <p>A query that lists the Azure Regions that have resources in scope.</p>
 * @public
 */
export interface AzureRegionsQuery {
  /**
   * <p>Limits the query to a management group or to specific subscriptions.</p>
   * @public
   */
  Scope?: AzureQueryScope | undefined;
}

/**
 * <p>A tag filter. A resource matches only if it has the tag. Filters for different tag keys must all match; for one tag key, any of the values can match.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>The tag key. Up to 512 characters. The characters &lt; &gt; % &amp; \ ? / $ \{ \} ' " ` and control characters aren't allowed.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag values to match. A resource matches if it has any of these values for the tag key.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A query that lists Azure resources.</p>
 * @public
 */
export interface AzureResourceIdsQuery {
  /**
   * <p>Limits the query to a management group or to specific subscriptions.</p>
   * @public
   */
  Scope?: AzureQueryScope | undefined;

  /**
   * <p>Limits the results to one Azure resource type, for example <code>Microsoft.Compute/virtualMachines</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Limits the results to one Azure Region, for example <code>eastus</code>.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Limits the results to resources that have these tags. A resource must match the filters for all tag keys, and any of the values for each key. The service matches tag keys and values case-insensitively, as Azure does.</p>
   * @public
   */
  TagFilters?: TagFilter[] | undefined;
}

/**
 * <p>A query that lists the Azure resource types that have resources in scope.</p>
 * @public
 */
export interface AzureResourceTypesQuery {
  /**
   * <p>Limits the query to a management group or to specific subscriptions.</p>
   * @public
   */
  Scope?: AzureQueryScope | undefined;
}

/**
 * <p>A query that lists Azure subscriptions.</p>
 * @public
 */
export interface AzureSubscriptionsQuery {
  /**
   * <p>Limits the results to subscriptions under this management group.</p>
   * @public
   */
  ManagementGroupId?: string | undefined;
}

/**
 * <p>The type of Azure resource to list. Specify one type.</p>
 * @public
 */
export type AzureConnectorQuery =
  | AzureConnectorQuery.EventHubsMember
  | AzureConnectorQuery.ManagementGroupsMember
  | AzureConnectorQuery.RegionsMember
  | AzureConnectorQuery.ResourceIdsMember
  | AzureConnectorQuery.ResourceTypesMember
  | AzureConnectorQuery.SubscriptionsMember
  | AzureConnectorQuery.$UnknownMember;

/**
 * @public
 */
export namespace AzureConnectorQuery {
  /**
   * <p>Lists Azure management groups.</p>
   * @public
   */
  export interface ManagementGroupsMember {
    ManagementGroups: AzureManagementGroupsQuery;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>Lists Azure subscriptions.</p>
   * @public
   */
  export interface SubscriptionsMember {
    ManagementGroups?: never;
    Subscriptions: AzureSubscriptionsQuery;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>Lists the Azure resource types that have resources in scope.</p>
   * @public
   */
  export interface ResourceTypesMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes: AzureResourceTypesQuery;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>Lists the Azure Regions that have resources in scope.</p>
   * @public
   */
  export interface RegionsMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions: AzureRegionsQuery;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>Lists Azure resources.</p>
   * @public
   */
  export interface ResourceIdsMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds: AzureResourceIdsQuery;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>Lists Azure Event Hubs.</p>
   * @public
   */
  export interface EventHubsMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs: AzureEventHubsQuery;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ManagementGroups: (value: AzureManagementGroupsQuery) => T;
    Subscriptions: (value: AzureSubscriptionsQuery) => T;
    ResourceTypes: (value: AzureResourceTypesQuery) => T;
    Regions: (value: AzureRegionsQuery) => T;
    ResourceIds: (value: AzureResourceIdsQuery) => T;
    EventHubs: (value: AzureEventHubsQuery) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Information about an Azure Event Hub.</p>
 * @public
 */
export interface AzureEventHubSummary {
  /**
   * <p>The Azure Resource Manager ID of the Event Hub.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the Event Hub.</p>
   * @public
   */
  EventHubName: string | undefined;

  /**
   * <p>The name of the Event Hubs namespace that contains the Event Hub.</p>
   * @public
   */
  NamespaceName: string | undefined;

  /**
   * <p>The fully qualified host name of the Event Hubs namespace, for example <code>&lt;namespace&gt;.servicebus.windows.net</code>. The suffix differs in sovereign clouds.</p>
   * @public
   */
  FullyQualifiedNamespace: string | undefined;

  /**
   * <p>The Azure Region of the Event Hub, for example <code>eastus</code>.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Azure subscription that contains the Event Hub.</p>
   * @public
   */
  SubscriptionId?: string | undefined;
}

/**
 * <p>Information about an Azure management group.</p>
 * @public
 */
export interface AzureManagementGroupSummary {
  /**
   * <p>The ID of the management group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the management group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The display name of the management group.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * <p>Information about an Azure resource.</p>
 * @public
 */
export interface AzureResourceIdentifierSummary {
  /**
   * <p>The Azure Resource Manager ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The Azure resource type, for example <code>Microsoft.Compute/virtualMachines</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The Azure Region of the resource, for example <code>eastus</code>.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Azure subscription that contains the resource.</p>
   * @public
   */
  SubscriptionId?: string | undefined;

  /**
   * <p>The tags on the resource. Absent if the resource has no tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Information about an Azure subscription.</p>
 * @public
 */
export interface AzureSubscriptionSummary {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  SubscriptionId: string | undefined;

  /**
   * <p>The display name of the subscription.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The state of the subscription in Azure, for example <code>Enabled</code>.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The ID of the management group that contains the subscription.</p>
   * @public
   */
  ManagementGroupId?: string | undefined;
}

/**
 * <p>The results of an Azure discovery query. The populated member matches the member of the query.</p>
 * @public
 */
export type AzureConnectorQueryResults =
  | AzureConnectorQueryResults.EventHubsMember
  | AzureConnectorQueryResults.ManagementGroupsMember
  | AzureConnectorQueryResults.RegionsMember
  | AzureConnectorQueryResults.ResourceIdsMember
  | AzureConnectorQueryResults.ResourceTypesMember
  | AzureConnectorQueryResults.SubscriptionsMember
  | AzureConnectorQueryResults.$UnknownMember;

/**
 * @public
 */
export namespace AzureConnectorQueryResults {
  /**
   * <p>The Azure management groups.</p>
   * @public
   */
  export interface ManagementGroupsMember {
    ManagementGroups: AzureManagementGroupSummary[];
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>The Azure subscriptions.</p>
   * @public
   */
  export interface SubscriptionsMember {
    ManagementGroups?: never;
    Subscriptions: AzureSubscriptionSummary[];
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>The Azure resource types.</p>
   * @public
   */
  export interface ResourceTypesMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes: string[];
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>The Azure Regions.</p>
   * @public
   */
  export interface RegionsMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions: string[];
    ResourceIds?: never;
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>The Azure resources.</p>
   * @public
   */
  export interface ResourceIdsMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds: AzureResourceIdentifierSummary[];
    EventHubs?: never;
    $unknown?: never;
  }

  /**
   * <p>The Azure Event Hubs.</p>
   * @public
   */
  export interface EventHubsMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs: AzureEventHubSummary[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ManagementGroups?: never;
    Subscriptions?: never;
    ResourceTypes?: never;
    Regions?: never;
    ResourceIds?: never;
    EventHubs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ManagementGroups: (value: AzureManagementGroupSummary[]) => T;
    Subscriptions: (value: AzureSubscriptionSummary[]) => T;
    ResourceTypes: (value: string[]) => T;
    Regions: (value: string[]) => T;
    ResourceIds: (value: AzureResourceIdentifierSummary[]) => T;
    EventHubs: (value: AzureEventHubSummary[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The Azure Storage Accounts in one Azure Region that store Flow Logs.</p>
 * @public
 */
export interface AzureFlowLogStorageAccountScope {
  /**
   * <p>The Azure Region of the Storage Accounts, for example <code>eastus</code>.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The Azure Resource Manager IDs of the Storage Accounts.</p>
   * @public
   */
  StorageAccountIds: string[] | undefined;
}

/**
 * <p>Configuration for existing Azure Storage Accounts that already receive your Flow Logs.</p>
 * @public
 */
export interface AzureCustomerManagedFlowLogs {
  /**
   * <p>The Storage Accounts that store your Flow Logs, listed by Azure Region. Each Region can appear only once, and each Storage Account can appear only once across all Regions.</p>
   * @public
   */
  StorageAccounts: AzureFlowLogStorageAccountScope[] | undefined;
}

/**
 * <p>Configuration of the Azure Event Hubs that the setup creates to deliver resource logs.</p>
 * @public
 */
export interface AzureEventHubConfiguration {
  /**
   * <p>The Event Hubs namespace tier.</p>
   * @public
   */
  Tier: AzureEventHubTier | undefined;

  /**
   * <p>The number of partitions in each Event Hub. The Standard tier allows 1–32 partitions and the Premium tier allows 1–100. On the Standard tier, you can't change this value after the setup creates the Event Hub.</p>
   * @public
   */
  PartitionCount: number | undefined;
}

/**
 * <p>The location of your Flow Logs: your existing Storage Accounts, or Storage Accounts that the setup creates. Specify one.</p>
 * @public
 */
export type AzureFlowLogsInfrastructure =
  | AzureFlowLogsInfrastructure.AwsManagedMember
  | AzureFlowLogsInfrastructure.CustomerManagedMember
  | AzureFlowLogsInfrastructure.$UnknownMember;

/**
 * @public
 */
export namespace AzureFlowLogsInfrastructure {
  /**
   * <p>Use your existing Storage Accounts that already store Flow Logs.</p>
   * @public
   */
  export interface CustomerManagedMember {
    CustomerManaged: AzureCustomerManagedFlowLogs;
    AwsManaged?: never;
    $unknown?: never;
  }

  /**
   * <p>Create one Storage Account in each Azure Region that ingests Flow Logs, in the subscription specified by <code>SubscriptionId</code>.</p>
   * @public
   */
  export interface AwsManagedMember {
    CustomerManaged?: never;
    AwsManaged: AzureAwsManagedFlowLogs;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    CustomerManaged?: never;
    AwsManaged?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    CustomerManaged: (value: AzureCustomerManagedFlowLogs) => T;
    AwsManaged: (value: AzureAwsManagedFlowLogs) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The choices for the Azure infrastructure that the setup creates.</p>
 * @public
 */
export interface AzureInfrastructure {
  /**
   * <p>The Azure subscription in which the setup creates the Event Hubs namespaces and, for <code>AwsManaged</code> Flow Logs, the Storage Accounts. You must specify this value if an <code>AzureScopeItem</code> collects <code>ResourceLogs</code>, or if you specify <code>EventHubs</code> or <code>AwsManaged</code> Flow Logs.</p>
   * @public
   */
  SubscriptionId?: string | undefined;

  /**
   * <p>The Event Hubs configuration. Specify exactly one entry, which applies to the Event Hubs in every Azure Region. This value applies only if an <code>AzureScopeItem</code> collects <code>ResourceLogs</code>. If you omit it, the setup uses default settings.</p>
   * @public
   */
  EventHubs?: AzureEventHubConfiguration[] | undefined;

  /**
   * <p>The location of your Flow Logs. You must specify this value if an <code>AzureScopeItem</code> collects <code>FlowLogs</code>, and you can specify it only in that case.</p>
   * @public
   */
  FlowLogs?: AzureFlowLogsInfrastructure | undefined;
}

/**
 * <p>Azure resources in one Azure Region.</p>
 * @public
 */
export interface AzureResourceIdScope {
  /**
   * <p>The Azure Region of the resources, for example <code>eastus</code>. Required because an Azure resource ID doesn't include the Region.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The Azure Resource Manager IDs of the resources.</p>
   * @public
   */
  ResourceIds: string[] | undefined;
}

/**
 * <p>The subscriptions to find resources in: all subscriptions that the connector can read, or a list of subscriptions. Specify one.</p>
 * @public
 */
export type AzureSubscriptionScope =
  | AzureSubscriptionScope.AllMember
  | AzureSubscriptionScope.IdsMember
  | AzureSubscriptionScope.$UnknownMember;

/**
 * @public
 */
export namespace AzureSubscriptionScope {
  /**
   * <p>All subscriptions that Azure role-based access control (Azure RBAC) allows the connector to read. Subscriptions that the connector can read later are included automatically.</p>
   * @public
   */
  export interface AllMember {
    All: AllSubscriptions;
    Ids?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of 1–1000 subscription IDs.</p>
   * @public
   */
  export interface IdsMember {
    All?: never;
    Ids: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    All?: never;
    Ids?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    All: (value: AllSubscriptions) => T;
    Ids: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The Azure resources to collect telemetry from. These are the resources found by <code>Subscriptions</code>, <code>Regions</code>, and <code>ResourceTypes</code>, optionally narrowed by <code>TagFilters</code>, plus any resources listed in <code>Resources</code>. You can specify:</p> <ul> <li> <p> <code>Subscriptions</code>, <code>Regions</code>, and <code>ResourceTypes</code> together</p> </li> <li> <p> <code>Resources</code> </p> </li> <li> <p>Both</p> </li> </ul>
 * @public
 */
export interface AzureScope {
  /**
   * <p>The subscriptions to find resources in: all subscriptions that the connector can read, or a list of subscriptions. Required when you use <code>Regions</code> and <code>ResourceTypes</code>.</p>
   * @public
   */
  Subscriptions?: AzureSubscriptionScope | undefined;

  /**
   * <p>The Azure Regions to find resources in. Required when you use <code>Subscriptions</code> and <code>ResourceTypes</code>.</p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p>The Azure resource types to find. Required when you use <code>Subscriptions</code> and <code>Regions</code>.</p>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>Limits the resources found by <code>Subscriptions</code>, <code>Regions</code>, and <code>ResourceTypes</code> to those that have these tags. You can specify up to 50 filters.</p>
   * @public
   */
  TagFilters?: TagFilter[] | undefined;

  /**
   * <p>Specific Azure resources, listed by Azure Region.</p>
   * @public
   */
  Resources?: AzureResourceIdScope[] | undefined;
}

/**
 * <p>The telemetry types to collect from a set of Azure resources.</p>
 * @public
 */
export interface AzureScopeItem {
  /**
   * <p>The telemetry types to collect.</p>
   * @public
   */
  TelemetryTypes: AzureTelemetryType[] | undefined;

  /**
   * <p>The Azure resources to collect telemetry from.</p>
   * @public
   */
  Scope: AzureScope | undefined;
}

/**
 * <p>The Microsoft Azure source configuration for a third-party telemetry enrichment.</p>
 * @public
 */
export interface AzureTelemetrySourceConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Config connector for the Microsoft Azure tenant to collect resource metadata from.</p>
   * @public
   */
  AwsConfigConnectorArn: string | undefined;
}

/**
 * <p>The Microsoft Azure source configuration of a third-party telemetry enrichment.</p>
 * @public
 */
export interface AzureTelemetrySourceConfigurationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Config connector that the enrichment uses.</p>
   * @public
   */
  AwsConfigConnectorArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked configuration recorder that CloudWatch created in your account for the enrichment.</p>
   * @public
   */
  ServiceLinkedRecorderArn?: string | undefined;
}

/**
 * <p>Configuration for backing up centralized log data to a secondary region.</p>
 * @public
 */
export interface LogsBackupConfiguration {
  /**
   * <p>Logs specific backup destination region within the primary destination account to which log data should be centralized.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>KMS Key ARN belonging to the primary destination account and backup region, to encrypt newly created central log groups in the backup destination.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p>Configuration that specifies a naming pattern for destination log groups created during centralization. The pattern supports static text and dynamic variables that are replaced with source attributes when log groups are created.</p>
 * @public
 */
export interface LogGroupNameConfiguration {
  /**
   * <p>The pattern used to generate destination log group names during centralization. The pattern can contain static text and dynamic variables that are replaced with source attributes. If a variable cannot be resolved, it inherits the value from its parent variable in the hierarchy. The pattern must be between 1 and 512 characters.</p> <p>Supported variables:</p> <ul> <li> <p> <b>$\{source.logGroup\}</b> — The original log group name from the source account.</p> </li> <li> <p> <b>$\{source.accountId\}</b> — The Amazon Web Services account ID where the log originated.</p> </li> <li> <p> <b>$\{source.region\}</b> — The Amazon Web Services Region where the log originated.</p> </li> <li> <p> <b>$\{source.org.id\}</b> — The Amazon Web Services Organization ID of the source account.</p> </li> <li> <p> <b>$\{source.org.ouId\}</b> — The organizational unit ID of the source account.</p> </li> <li> <p> <b>$\{source.org.rootId\}</b> — The organization Root ID.</p> </li> <li> <p> <b>$\{source.org.path\}</b> — The organizational path from account to root.</p> </li> </ul>
   * @public
   */
  LogGroupNamePattern: string | undefined;
}

/**
 * <p>Configuration for encrypting centralized destination log groups. By default, this configuration applies only to destination log groups whose corresponding source log groups are encrypted using customer managed KMS keys. To encrypt all destination log groups created by the rule, set <code>EncryptionScope</code> to <code>NEW_DESTINATION_LOG_GROUPS</code>.</p>
 * @public
 */
export interface LogsEncryptionConfiguration {
  /**
   * <p>Configuration that determines the encryption strategy of the destination log groups. CUSTOMER_MANAGED uses the configured KmsKeyArn to encrypt newly created destination log groups.</p>
   * @public
   */
  EncryptionStrategy: EncryptionStrategy | undefined;

  /**
   * <p>KMS Key ARN belonging to the primary destination account and region, to encrypt newly created central log groups in the primary destination.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Conflict resolution strategy for centralization if the encryption strategy is set to CUSTOMER_MANAGED and the destination log group is encrypted with an AWS_OWNED KMS Key. ALLOW lets centralization go through while SKIP prevents centralization into the destination log group.</p>
   * @public
   */
  EncryptionConflictResolutionStrategy?: EncryptionConflictResolutionStrategy | undefined;

  /**
   * <p>Determines which newly created destination log groups are encrypted with the configured <code>KmsKeyArn</code> when <code>EncryptionStrategy</code> is <code>CUSTOMER_MANAGED</code>.</p> <p>If you set this to <code>ENCRYPTED_SOURCE_ONLY</code> (the default), only destination log groups whose source log group is encrypted with a customer managed KMS key use the configured <code>KmsKeyArn</code>. Destination log groups derived from Amazon Web Services owned encrypted source log groups remain Amazon Web Services owned encrypted.</p> <p>If you set this to <code>NEW_DESTINATION_LOG_GROUPS</code>, every new destination log group created by this rule uses the configured <code>KmsKeyArn</code>, regardless of the source log group's encryption posture.</p> <p>This field is not valid when <code>EncryptionStrategy</code> is <code>AWS_OWNED</code>.</p>
   * @public
   */
  EncryptionScope?: EncryptionScope | undefined;
}

/**
 * <p>Specifies configuration for propagating resource tags from source log groups to centralized destination log groups. The service uses a customer-managed IAM role in the destination account to add, update, and remove tags on destination log groups.</p>
 * @public
 */
export interface TagPropagationConfiguration {
  /**
   * <p>The ARN of a customer-managed IAM role in the destination account. The service assumes this role to propagate tags to destination log groups. You must have <code>iam:PassRole</code> permission on this role.</p>
   * @public
   */
  DestinationRoleArn: string | undefined;

  /**
   * <p>The strategy for resolving conflicts when a tag key exists on both the source and destination log groups. If not specified, defaults to <code>UPDATE_SYNC</code>.</p> <ul> <li> <p> <code>ADD_ONLY</code> – Only adds new tags from the source without modifying existing destination tags.</p> </li> <li> <p> <code>UPDATE_SYNC</code> – Adds new tags and updates existing tags from the source. Does not remove destination tags that are absent from the source.</p> </li> <li> <p> <code>IN_SYNC</code> – Keeps destination tags fully synchronized with source tags, including removing destination tags that do not exist on the source.</p> </li> </ul>
   * @public
   */
  TagConflictResolutionStrategy?: TagConflictResolutionStrategy | undefined;
}

/**
 * <p>Configuration for centralization destination log groups, including encryption and backup settings.</p>
 * @public
 */
export interface DestinationLogsConfiguration {
  /**
   * <p>The encryption configuration for centralization destination log groups.</p>
   * @public
   */
  LogsEncryptionConfiguration?: LogsEncryptionConfiguration | undefined;

  /**
   * <p>Configuration defining the backup region and an optional KMS key for the backup destination.</p>
   * @public
   */
  BackupConfiguration?: LogsBackupConfiguration | undefined;

  /**
   * <p>Configuration that specifies a naming pattern for destination log groups created during centralization. The pattern supports static text and dynamic variables that are replaced with source attributes when log groups are created.</p>
   * @public
   */
  LogGroupNameConfiguration?: LogGroupNameConfiguration | undefined;

  /**
   * <p>Specifies the tag propagation configuration for this centralization rule. When present, <code>LogGroupNameConfiguration</code> must use a <code>LogGroupNamePattern</code> that contains <code>$\{source.logGroup\}</code>, <code>$\{source.accountId\}</code>, and <code>$\{source.region\}</code>.</p>
   * @public
   */
  TagPropagationConfiguration?: TagPropagationConfiguration | undefined;

  /**
   * <p>Specifies whether this centralization rule enables deletion protection on the destination log groups that it creates. If you don't specify this setting, the rule doesn't enable deletion protection on the log groups that it creates. If you specify a backup Region in <code>BackupConfiguration</code>, the setting also applies to the log groups that the rule creates in the backup Region.</p> <p>When you set this to <code>ENABLED</code>, the rule enables deletion protection only on log groups that it creates after you enable the setting. It does not add deletion protection to log groups the rule created before you enabled the setting.</p> <p>If you remove this setting from the rule or delete the rule, deletion protection stays enabled on log groups that already have it. To delete one of these log groups, first disable deletion protection on the log group in the destination account.</p>
   * @public
   */
  LogGroupDeletionProtection?: DeletionProtection | undefined;
}

/**
 * <p>Configuration for backing up centralized metrics data to a secondary region.</p>
 * @public
 */
export interface MetricsBackupConfiguration {
  /**
   * <p>Metrics specific backup destination region within the primary destination account to which metrics data should be centralized.</p>
   * @public
   */
  Region: string | undefined;
}

/**
 * <p>Configuration for centralization destination metrics, including backup settings.</p>
 * @public
 */
export interface DestinationMetricsConfiguration {
  /**
   * <p>Configuration defining the backup region for the metrics backup destination.</p>
   * @public
   */
  BackupConfiguration?: MetricsBackupConfiguration | undefined;
}

/**
 * <p>Configuration for backing up centralized profiles data to a secondary Region.</p>
 * @public
 */
export interface ProfilesBackupConfiguration {
  /**
   * <p>The backup Region for profiles, within the primary destination account, to which the service centralizes profiles data.</p>
   * @public
   */
  Region: string | undefined;
}

/**
 * <p>Configuration for centralization destination profiles, including backup settings.</p>
 * @public
 */
export interface DestinationProfilesConfiguration {
  /**
   * <p>Configuration that defines the backup Region for the profiles backup destination.</p>
   * @public
   */
  BackupConfiguration?: ProfilesBackupConfiguration | undefined;
}

/**
 * <p>Configuration specifying the primary destination for centralized telemetry data.</p>
 * @public
 */
export interface CentralizationRuleDestination {
  /**
   * <p>The primary destination region to which telemetry data should be centralized.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>The destination account (within the organization) to which the telemetry data should be centralized.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>Log specific configuration for centralization destination log groups.</p>
   * @public
   */
  DestinationLogsConfiguration?: DestinationLogsConfiguration | undefined;

  /**
   * <p>Metric specific configuration for centralization destination metrics.</p>
   * @public
   */
  DestinationMetricsConfiguration?: DestinationMetricsConfiguration | undefined;

  /**
   * <p>Profile-specific configuration for centralization destination profiles.</p>
   * @public
   */
  DestinationProfilesConfiguration?: DestinationProfilesConfiguration | undefined;
}

/**
 * <p>Configuration that enables centralization of the context graph for the selected sources. Including this configuration in a rule's source opts the rule into centralizing the context graph for the selected sources.</p>
 * @public
 */
export interface SourceContextGraphConfiguration {}

/**
 * <p>Configuration for selecting and handling source log groups for centralization.</p>
 * @public
 */
export interface SourceLogsConfiguration {
  /**
   * <p>The selection criteria that specifies which source log groups to centralize. The selection criteria uses the same format as OAM link filters.</p>
   * @public
   */
  LogGroupSelectionCriteria?: string | undefined;

  /**
   * <p>The selection criteria that specifies which data sources to centralize. The selection criteria uses the same filter expression format as <code>LogGroupSelectionCriteria</code>, but operates on <code>DataSourceName</code> and <code>DataSourceType</code> operands. When both <code>LogGroupSelectionCriteria</code> and <code>DataSourceSelectionCriteria</code> are specified, a log event must match both criteria to be centralized.</p>
   * @public
   */
  DataSourceSelectionCriteria?: string | undefined;

  /**
   * <p>A strategy determining whether to centralize source log groups that are encrypted with customer managed KMS keys (CMK). ALLOW will consider CMK encrypted source log groups for centralization while SKIP will skip CMK encrypted source log groups from centralization.</p>
   * @public
   */
  EncryptedLogGroupStrategy: EncryptedLogGroupStrategy | undefined;
}

/**
 * <p>Configuration for selecting source metrics for centralization.</p>
 * @public
 */
export interface SourceMetricsConfiguration {
  /**
   * <p>The filter expression that selects which source metrics to centralize. Currently, only <code>*</code> (all metrics) is supported. Other values return a validation error.</p>
   * @public
   */
  MetricsSelectionCriteria?: string | undefined;
}

/**
 * <p>Configuration for selecting source profiles for centralization.</p>
 * @public
 */
export interface SourceProfilesConfiguration {
  /**
   * <p>The filter expression that selects which source profiles to centralize.</p>
   * @public
   */
  ProfilesSelectionCriteria?: string | undefined;
}

/**
 * <p>Configuration specifying the source of telemetry data to be centralized.</p>
 * @public
 */
export interface CentralizationRuleSource {
  /**
   * <p>The list of source regions from which telemetry data should be centralized.</p>
   * @public
   */
  Regions: string[] | undefined;

  /**
   * <p>The organizational scope from which telemetry data should be centralized, specified using organization id, accounts or organizational unit ids.</p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>Log specific configuration for centralization source log groups.</p>
   * @public
   */
  SourceLogsConfiguration?: SourceLogsConfiguration | undefined;

  /**
   * <p>Metric specific configuration for centralization source metrics.</p>
   * @public
   */
  SourceMetricsConfiguration?: SourceMetricsConfiguration | undefined;

  /**
   * <p>Profile-specific configuration for centralization source profiles.</p>
   * @public
   */
  SourceProfilesConfiguration?: SourceProfilesConfiguration | undefined;

  /**
   * <p>Configuration that enables centralization of the context graph for the selected sources. Including this configuration in a rule's source opts the rule into centralizing the context graph for the selected sources.</p>
   * @public
   */
  SourceContextGraphConfiguration?: SourceContextGraphConfiguration | undefined;
}

/**
 * <p>Defines how telemetry data should be centralized across an Amazon Web Services Organization, including source and destination configurations.</p>
 * @public
 */
export interface CentralizationRule {
  /**
   * <p>Configuration determining the source of the telemetry data to be centralized.</p>
   * @public
   */
  Source: CentralizationRuleSource | undefined;

  /**
   * <p>Configuration determining where the telemetry data should be centralized, backed up, as well as encryption configuration for the primary and backup destinations.</p>
   * @public
   */
  Destination: CentralizationRuleDestination | undefined;
}

/**
 * <p>A summary of a centralization rule's key properties and status.</p>
 * @public
 */
export interface CentralizationRuleSummary {
  /**
   * <p>The name of the organization centralization rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Account that created the organization centralization rule.</p>
   * @public
   */
  CreatorAccountId?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Web Services region where the organization centralization rule was created.</p>
   * @public
   */
  CreatedRegion?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The health status of the organization centralization rule.</p>
   * @public
   */
  RuleHealth?: RuleHealth | undefined;

  /**
   * <p>The reason why an organization centralization rule is marked UNHEALTHY.</p>
   * @public
   */
  FailureReason?: CentralizationFailureReason | undefined;

  /**
   * <p>The health status of tag propagation for this rule. This status is independent of the overall <code>RuleHealth</code> for log delivery. Returns <code>Healthy</code> when the most recent tag-propagation attempt succeeded, or <code>Unhealthy</code> when the most recent attempt failed.</p>
   * @public
   */
  TagPropagationStatus?: TagPropagationStatus | undefined;

  /**
   * <p>The reason tag propagation is unhealthy for this rule. Only present when <code>TagPropagationStatus</code> is <code>Unhealthy</code>.</p>
   * @public
   */
  TagPropagationFailureReason?: TagPropagationFailureReason | undefined;

  /**
   * <p>The status of context graph centralization for this rule. Returns <code>Provisioning</code> while the context graph is being set up, <code>Healthy</code> once it is active, or <code>Unhealthy</code> if provisioning failed. This status is independent of the overall <code>RuleHealth</code> for log delivery.</p>
   * @public
   */
  ContextGraphStatus?: ContextGraphStatus | undefined;

  /**
   * <p>The primary destination account of the organization centralization rule.</p>
   * @public
   */
  DestinationAccountId?: string | undefined;

  /**
   * <p>The primary destination region of the organization centralization rule.</p>
   * @public
   */
  DestinationRegion?: string | undefined;
}

/**
 * <p> Parameters specific to Amazon Web Services CloudTrail telemetry configuration. </p>
 * @public
 */
export interface CloudtrailParameters {
  /**
   * <p> The advanced event selectors to use for filtering Amazon Web Services CloudTrail events. </p>
   * @public
   */
  AdvancedEventSelectors: AdvancedEventSelector[] | undefined;
}

/**
 * <p> Condition that matches based on WAF rule labels, with label names limited to 1024 characters. </p>
 * @public
 */
export interface LabelNameCondition {
  /**
   * <p> The label name to match, supporting alphanumeric characters, underscores, hyphens, and colons. </p>
   * @public
   */
  LabelName?: string | undefined;
}

/**
 * <p> A single condition that can match based on WAF rule action or label name. </p>
 * @public
 */
export interface Condition {
  /**
   * <p> Matches log records based on the WAF rule action taken (ALLOW, BLOCK, COUNT, etc.). </p>
   * @public
   */
  ActionCondition?: ActionCondition | undefined;

  /**
   * <p> Matches log records based on WAF rule labels applied to the request. </p>
   * @public
   */
  LabelNameCondition?: LabelNameCondition | undefined;
}

/**
 * <p>Information about a data source associated with the telemetry pipeline. For CloudWatch Logs sources, this includes both a name and type extracted from the log event metadata. For third-party sources (such as S3), this includes only a name, with the type field left empty.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The name of the data source. For CloudWatch Logs sources, this corresponds to the <code>data_source_name</code> from the log event metadata. For third-party sources, this is either the configured <code>data_source_name</code> or defaults to the plugin name if not specified.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the data source. For CloudWatch Logs sources, this corresponds to the <code>data_source_type</code> from the log event metadata. For third-party sources, this field is empty.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A list of source plugin types used in the pipeline configuration (such as <code>cloudwatch_logs</code> or <code>s3</code>). Currently supports a single source per pipeline, but is structured as a list to accommodate multiple pipelines in the configuration.</p>
 * @public
 */
export interface Source {
  /**
   * <p>The plugin name of the source, such as <code>cloudwatch_logs</code> or <code>s3</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides a summary of pipeline configuration components including sources, processors, and destinations.</p>
 * @public
 */
export interface ConfigurationSummary {
  /**
   * <p>The list of data sources configured in the pipeline.</p>
   * @public
   */
  Sources?: Source[] | undefined;

  /**
   * <p>The list of data sources that provide telemetry data to the pipeline.</p>
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * <p>The list of processors configured in the pipeline for data transformation.</p>
   * @public
   */
  Processors?: string[] | undefined;

  /**
   * <p>The total number of processors configured in the pipeline.</p>
   * @public
   */
  ProcessorCount?: number | undefined;

  /**
   * <p>The list of destinations where processed data is sent.</p>
   * @public
   */
  Sinks?: string[] | undefined;
}

/**
 * <p>The configuration for connecting to a third-party cloud provider. Specify one provider.</p>
 * @public
 */
export type ConnectorConfiguration =
  | ConnectorConfiguration.AzureMember
  | ConnectorConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ConnectorConfiguration {
  /**
   * <p>The configuration of a connector to Microsoft Azure.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureConnectorConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureConnectorConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A connector to a third-party cloud provider.</p>
 * @public
 */
export interface Connector {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The cloud provider that the connector connects to.</p>
   * @public
   */
  Provider: ConnectorProvider | undefined;

  /**
   * <p>The configuration for connecting to the third-party cloud provider.</p>
   * @public
   */
  ConnectorConfiguration: ConnectorConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that CloudWatch assumes to obtain credentials for the third-party cloud provider.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time when the connector was created, in milliseconds since the Unix epoch.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;
}

/**
 * <p>What to list in a cloud provider. Specify one provider.</p>
 * @public
 */
export type ConnectorQuery =
  | ConnectorQuery.AzureMember
  | ConnectorQuery.$UnknownMember;

/**
 * @public
 */
export namespace ConnectorQuery {
  /**
   * <p>The type of Azure resource to list.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureConnectorQuery;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureConnectorQuery) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The results of a query. The populated member matches the member of the query.</p>
 * @public
 */
export type ConnectorQueryResults =
  | ConnectorQueryResults.AzureMember
  | ConnectorQueryResults.$UnknownMember;

/**
 * @public
 */
export namespace ConnectorQueryResults {
  /**
   * <p>The results of an Azure discovery query.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureConnectorQueryResults;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureConnectorQueryResults) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Summary information about a connector.</p>
 * @public
 */
export interface ConnectorSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The cloud provider that the connector connects to.</p>
   * @public
   */
  Provider: ConnectorProvider | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time when the connector was created, in milliseconds since the Unix epoch.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface CreateCentralizationRuleForOrganizationInput {
  /**
   * <p>A unique name for the organization-wide centralization rule being created.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The configuration details for the organization-wide centralization rule, including the source configuration and the destination configuration to centralize telemetry data across the organization.</p>
   * @public
   */
  Rule: CentralizationRule | undefined;

  /**
   * <p>The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCentralizationRuleForOrganizationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * <p>Represents a detailed validation error with message, reason, and field mapping for comprehensive error reporting.</p>
 * @public
 */
export interface ValidationError {
  /**
   * <p>The error message describing the validation issue.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The reason code or category for the validation error.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>A mapping of field names to specific validation issues within the configuration.</p>
   * @public
   */
  FieldMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorInput {
  /**
   * <p>The configuration for connecting to the third-party cloud provider.</p>
   * @public
   */
  ConnectorConfiguration: ConnectorConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that CloudWatch assumes to get credentials for the third-party cloud provider. The role must trust the Amazon CloudWatch Observability Admin service principal, <code>observabilityadmin.amazonaws.com</code>. The role must also allow <code>sts:GetWebIdentityToken</code> for the provider's token exchange audience.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the connector. The name must be unique in the account and Region (case-sensitive). If another connector already uses the name, the request fails with a <code>ConflictException</code>.</p> <p>The name can contain letters, digits, hyphens (-), underscores (_) and periods (.), and must start with a letter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The tags that you want to apply to the connector.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the operation completes no more than one time. If you use an Amazon Web Services SDK, the SDK generates this value and reuses it on retries. If this token matches a previous request with the same parameters, the service returns the connector from the first request without an error. If you use the same token with different parameters, including different tags, the service returns a <code>ValidationException</code>. This operation is idempotent when you use the same token and parameters.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorOutput {
  /**
   * <p>The connector that this request created.</p>
   * @public
   */
  Connector: Connector | undefined;
}

/**
 * @public
 */
export interface CreateDatasetIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants Amazon CloudWatch permission to access the resources needed for the dataset integration.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The key-value pairs to associate with the dataset integration resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created dataset integration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the dataset integration.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The timestamp when the dataset integration was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the dataset integration was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * <p>Defines the encryption configuration for S3 Table integrations, including the encryption algorithm and KMS key settings.</p>
 * @public
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used for encrypting data in the S3 Table integration.</p>
   * @public
   */
  SseAlgorithm: SSEAlgorithm | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used for encryption when using customer-managed keys.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateS3TableIntegrationInput {
  /**
   * <p>The encryption configuration for the S3 Table integration, including the encryption algorithm and KMS key settings.</p>
   * @public
   */
  Encryption: Encryption | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants permissions for the S3 Table integration to access necessary resources.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The key-value pairs to associate with the S3 Table integration resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateS3TableIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created S3 Table integration.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Defines the configuration for a pipeline, including how data flows from sources through processors to destinations. The configuration is specified in YAML format and must include a valid pipeline definition with required source and sink components. This pipeline enables end-to-end telemetry data collection, transformation, and delivery while supporting optional processing steps and extensions for enhanced functionality.</p> <p>The primary pipeline configuration section are:</p> <ul> <li> <p> <b>Source:</b> Defines where log data originates from (S3 buckets, CloudWatch Logs, third-party APIs). Each pipeline must have exactly one source.</p> </li> <li> <p> <b>Processors (optional):</b> Transform, parse, and enrich log data as it flows through the pipeline. Processors are applied sequentially in the order they are defined.</p> </li> <li> <p> <b>Sink:</b> Defines the destination where processed log data is sent. Each pipeline must have exactly one sink.</p> </li> <li> <p> <b>Extensions (optional):</b> Provide additional functionality such as Amazon Web Services Secrets Manager integration for credential management.</p> </li> </ul> <p>For more details on each configuration section see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-pipelines.html">CloudWatch pipelines User Guide</a>. Additional comprehensive configuration examples can be found in the <a href="https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_CreateTelemetryPipeline.html#API_CreateTelemetryPipeline_Examples">CreateTelemetryPipeline API docs</a>.</p>
 * @public
 */
export interface TelemetryPipelineConfiguration {
  /**
   * <p>The pipeline configuration body that defines the data processing rules and transformations.</p>
   * @public
   */
  Body: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryPipelineInput {
  /**
   * <p>The name of the telemetry pipeline to create. The name must be unique within your account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration that defines how the telemetry pipeline processes data, including sources, processors, and destinations. For more information about pipeline components, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/pipeline-components-reference.html">Amazon CloudWatch User Guide</a> </p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;

  /**
   * <p>The key-value pairs to associate with the telemetry pipeline resource for categorization and management purposes.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryPipelineOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created telemetry pipeline.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p> Configuration parameters for ELB load balancer logging, including output format and field delimiter settings. </p>
 * @public
 */
export interface ELBLoadBalancerLoggingParameters {
  /**
   * <p> The format for ELB access log entries (plain text or JSON format). </p>
   * @public
   */
  OutputFormat?: OutputFormat | undefined;

  /**
   * <p> The delimiter character used to separate fields in ELB access log entries when using plain text format. </p>
   * @public
   */
  FieldDelimiter?: string | undefined;
}

/**
 * <p>The configuration parameters for log delivery, including <code>logType</code> settings. Applies to resource types that support configurable log delivery, such as Amazon Bedrock Knowledge Bases, Amazon Bedrock AgentCore payment managers, and Elastic Load Balancing Application Load Balancers.</p>
 * @public
 */
export interface LogDeliveryParameters {
  /**
   * <p>The types of logs to collect from the resource.</p>
   * @public
   */
  LogTypes?: LogType[] | undefined;
}

/**
 * <p> Configuration parameters for Amazon MSK cluster monitoring, including enhanced monitoring level settings. </p>
 * @public
 */
export interface MskMonitoringParameters {
  /**
   * <p> The level of enhanced monitoring for the MSK cluster. </p>
   * @public
   */
  EnhancedMonitoring?: MskEnhancedMonitoringLevel | undefined;
}

/**
 * <p> Configuration parameters specific to VPC Flow Logs. </p>
 * @public
 */
export interface VPCFlowLogParameters {
  /**
   * <p> The format in which VPC Flow Log entries should be logged. </p>
   * @public
   */
  LogFormat?: string | undefined;

  /**
   * <p> The type of traffic to log (ACCEPT, REJECT, or ALL). </p>
   * @public
   */
  TrafficType?: string | undefined;

  /**
   * <p> The maximum interval in seconds between the capture of flow log records. </p>
   * @public
   */
  MaxAggregationInterval?: number | undefined;
}

/**
 * <p> A single filter condition that specifies behavior, requirement, and matching conditions for WAF log records. </p>
 * @public
 */
export interface Filter {
  /**
   * <p> The action to take for log records matching this filter (KEEP or DROP). </p>
   * @public
   */
  Behavior?: FilterBehavior | undefined;

  /**
   * <p> Whether the log record must meet all conditions (MEETS_ALL) or any condition (MEETS_ANY) to match this filter. </p>
   * @public
   */
  Requirement?: FilterRequirement | undefined;

  /**
   * <p> The list of conditions that determine if a log record matches this filter. </p>
   * @public
   */
  Conditions?: Condition[] | undefined;
}

/**
 * <p> Configuration that determines which WAF log records to keep or drop based on specified conditions. </p>
 * @public
 */
export interface LoggingFilter {
  /**
   * <p> A list of filter conditions that determine log record handling behavior. </p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p> The default action (KEEP or DROP) for log records that don't match any filter conditions. </p>
   * @public
   */
  DefaultBehavior?: FilterBehavior | undefined;
}

/**
 * <p> Structure containing a name field limited to 64 characters for header or query parameter identification. </p>
 * @public
 */
export interface SingleHeader {
  /**
   * <p> The name value, limited to 64 characters. </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p> Specifies a field in the request to redact from WAF logs, such as headers, query parameters, or body content. </p>
 * @public
 */
export interface FieldToMatch {
  /**
   * <p> Redacts a specific header field by name from WAF logs. </p>
   * @public
   */
  SingleHeader?: SingleHeader | undefined;

  /**
   * <p> Redacts the URI path from WAF logs. </p>
   * @public
   */
  UriPath?: string | undefined;

  /**
   * <p> Redacts the entire query string from WAF logs. </p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p> Redacts the HTTP method from WAF logs. </p>
   * @public
   */
  Method?: string | undefined;
}

/**
 * <p> Configuration parameters for WAF logging, including redacted fields and logging filters. </p>
 * @public
 */
export interface WAFLoggingParameters {
  /**
   * <p> The fields to redact from WAF logs to protect sensitive information. </p>
   * @public
   */
  RedactedFields?: FieldToMatch[] | undefined;

  /**
   * <p> A filter configuration that determines which WAF log records to include or exclude. </p>
   * @public
   */
  LoggingFilter?: LoggingFilter | undefined;

  /**
   * <p> The type of WAF logs to collect (currently supports WAF_LOGS). </p>
   * @public
   */
  LogType?: WAFLogType | undefined;
}

/**
 * <p> Configuration specifying where and how telemetry data should be delivered for Amazon Web Services resources. </p>
 * @public
 */
export interface TelemetryDestinationConfiguration {
  /**
   * <p> The type of destination for the telemetry data (e.g., "Amazon CloudWatch Logs", "S3"). </p>
   * @public
   */
  DestinationType?: DestinationType | undefined;

  /**
   * <p> The pattern used to generate the destination path or name, supporting macros like &lt;resourceId&gt; and &lt;accountId&gt;. </p>
   * @public
   */
  DestinationPattern?: string | undefined;

  /**
   * <p> The number of days to retain the telemetry data in the destination. </p>
   * @public
   */
  RetentionInDays?: number | undefined;

  /**
   * <p> Configuration parameters specific to VPC Flow Logs when VPC is the resource type. </p>
   * @public
   */
  VPCFlowLogParameters?: VPCFlowLogParameters | undefined;

  /**
   * <p> Configuration parameters specific to Amazon Web Services CloudTrail when CloudTrail is the source type. </p>
   * @public
   */
  CloudtrailParameters?: CloudtrailParameters | undefined;

  /**
   * <p> Configuration parameters specific to ELB load balancer logging when ELB is the resource type. </p>
   * @public
   */
  ELBLoadBalancerLoggingParameters?: ELBLoadBalancerLoggingParameters | undefined;

  /**
   * <p> Configuration parameters specific to WAF logging when WAF is the resource type. </p>
   * @public
   */
  WAFLoggingParameters?: WAFLoggingParameters | undefined;

  /**
   * <p>The configuration parameters for log delivery when the resource type supports configurable log types, such as Amazon Bedrock Knowledge Bases, Amazon Bedrock AgentCore payment managers, or Elastic Load Balancing Application Load Balancers.</p>
   * @public
   */
  LogDeliveryParameters?: LogDeliveryParameters | undefined;

  /**
   * <p> Configuration parameters specific to MSK monitoring when MSK is the resource type. </p>
   * @public
   */
  MskMonitoringParameters?: MskMonitoringParameters | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the customer-managed Amazon Web Services KMS key used to encrypt the log groups created during telemetry rule remediation. </p>
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * <p> Defines how telemetry should be configured for specific Amazon Web Services resources. </p>
 * @public
 */
export interface TelemetryRule {
  /**
   * <p> The type of Amazon Web Services resource to configure telemetry for (for example, <code>AWS::EC2::VPC</code>, <code>AWS::EKS::Cluster</code>, <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>, <code>AWS::Bedrock::KnowledgeBase</code>, <code>AWS::BedrockAgentCore::PaymentManager</code>, or <code>AWS::XRay::TransactionSearchConfig</code>). </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The type of telemetry to collect (Logs, Metrics, Traces, or Insights). </p>
   * @public
   */
  TelemetryType: TelemetryType | undefined;

  /**
   * <p> The specific telemetry source types to configure for the resource, such as VPC_FLOW_LOGS or EKS_AUDIT_LOGS. TelemetrySourceTypes must be correlated with the specific resource type. </p>
   * @public
   */
  TelemetrySourceTypes?: TelemetrySourceType[] | undefined;

  /**
   * <p> Configuration specifying where and how the telemetry data should be delivered. </p>
   * @public
   */
  DestinationConfiguration?: TelemetryDestinationConfiguration | undefined;

  /**
   * <p> The organizational scope to which the rule applies, specified using accounts or organizational units. </p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p> Criteria for selecting which resources the rule applies to, such as resource tags. </p>
   * @public
   */
  SelectionCriteria?: string | undefined;

  /**
   * <p> If set to <code>true</code>, Amazon CloudWatch Observability Admin detects and remediates configuration drift in telemetry resources that it manages. For example, if a VPC flow log's format, traffic type, or aggregation interval no longer matches the rule's destination configuration, the flow log is replaced with one that matches. Only Observability Admin-managed resources are updated; customer-created resources are never modified. Currently supported for <code>AWS::EC2::VPC</code> resources (VPC flow logs). </p>
   * @public
   */
  AllowFieldUpdates?: boolean | undefined;

  /**
   * <p> An optional list of Amazon Web Services Regions where this telemetry rule should be replicated. When specified, the rule is created in the home region and automatically replicated to all listed regions. Mutually exclusive with <code>AllRegions</code>. </p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p> If set to <code>true</code>, the telemetry rule is replicated to all Amazon Web Services Regions where Amazon CloudWatch Observability Admin is available in the current partition. When new regions become available, the rule automatically replicates to them. Mutually exclusive with <code>Regions</code>. </p>
   * @public
   */
  AllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleInput {
  /**
   * <p> A unique name for the telemetry rule being created. </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p> The configuration details for the telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * <p> The key-value pairs to associate with the telemetry rule resource for categorization and management purposes. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationInput {
  /**
   * <p> A unique name for the organization-wide telemetry rule being created. </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p> The configuration details for the organization-wide telemetry rule, including the resource type, telemetry type, destination configuration, and selection criteria for which resources the rule applies to across the organization. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;

  /**
   * <p> The key-value pairs to associate with the organization telemetry rule resource for categorization and management purposes. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTelemetryRuleForOrganizationOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the created organization telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * <p>Contains summary information about a dataset integration, including its ARN, associated IAM role, and creation and update timestamps, as returned by <code>ListDatasetIntegrations</code>.</p>
 * @public
 */
export interface DatasetIntegrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset integration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the dataset integration.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The timestamp when the dataset integration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the dataset integration was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCentralizationRuleForOrganizationInput {
  /**
   * <p>The identifier (name or ARN) of the organization centralization rule to delete.</p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorInput {
  /**
   * <p>The connector to delete. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the connector</p> </li> <li> <p>The ID of the connector</p> </li> </ul>
   * @public
   */
  ConnectorIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorOutput {}

/**
 * @public
 */
export interface DeleteDatasetIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset integration to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteS3TableIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryPipelineInput {
  /**
   * <p>The ARN of the telemetry pipeline to delete.</p>
   * @public
   */
  PipelineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryPipelineOutput {}

/**
 * @public
 */
export interface DeleteTelemetryRuleInput {
  /**
   * <p> The identifier (name or ARN) of the telemetry rule to delete. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTelemetryRuleForOrganizationInput {
  /**
   * <p> The identifier (name or ARN) of the organization telemetry rule to delete. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCentralizationRuleForOrganizationInput {
  /**
   * <p>The identifier (name or ARN) of the organization centralization rule to retrieve.</p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCentralizationRuleForOrganizationOutput {
  /**
   * <p>The name of the organization centralization rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services Account that created the organization centralization rule.</p>
   * @public
   */
  CreatorAccountId?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Web Services region where the organization centralization rule was created.</p>
   * @public
   */
  CreatedRegion?: string | undefined;

  /**
   * <p>The timestamp when the organization centralization rule was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The health status of the organization centralization rule.</p>
   * @public
   */
  RuleHealth?: RuleHealth | undefined;

  /**
   * <p>The reason why an organization centralization rule is marked UNHEALTHY.</p>
   * @public
   */
  FailureReason?: CentralizationFailureReason | undefined;

  /**
   * <p>The health status of tag propagation for this rule. This status is independent of the overall <code>RuleHealth</code> for log delivery. Returns <code>Healthy</code> when the most recent tag-propagation attempt succeeded, or <code>Unhealthy</code> when the most recent attempt failed.</p>
   * @public
   */
  TagPropagationStatus?: TagPropagationStatus | undefined;

  /**
   * <p>The reason tag propagation is unhealthy for this rule. Only present when <code>TagPropagationStatus</code> is <code>Unhealthy</code>.</p>
   * @public
   */
  TagPropagationFailureReason?: TagPropagationFailureReason | undefined;

  /**
   * <p>The status of context graph centralization for this rule. Returns <code>Provisioning</code> while the context graph is being set up, <code>Healthy</code> once it is active, or <code>Unhealthy</code> if provisioning failed. This status is independent of the overall <code>RuleHealth</code> for log delivery.</p>
   * @public
   */
  ContextGraphStatus?: ContextGraphStatus | undefined;

  /**
   * <p>The configuration details for the organization centralization rule.</p>
   * @public
   */
  CentralizationRule?: CentralizationRule | undefined;
}

/**
 * @public
 */
export interface GetConnectorInput {
  /**
   * <p>The connector. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the connector</p> </li> <li> <p>The ID of the connector</p> </li> </ul>
   * @public
   */
  ConnectorIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorOutput {
  /**
   * <p>The connector.</p>
   * @public
   */
  Connector: Connector | undefined;
}

/**
 * @public
 */
export interface GetConnectorTelemetryManifestInput {
  /**
   * <p>The connector. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the connector</p> </li> <li> <p>The ID of the connector</p> </li> </ul>
   * @public
   */
  ConnectorIdentifier: string | undefined;
}

/**
 * <p>The choices for the infrastructure that the setup creates. Specify one provider, which must match the provider in <code>Source</code>.</p>
 * @public
 */
export type TelemetryManifestInfrastructure =
  | TelemetryManifestInfrastructure.AzureMember
  | TelemetryManifestInfrastructure.$UnknownMember;

/**
 * @public
 */
export namespace TelemetryManifestInfrastructure {
  /**
   * <p>The choices for the Azure infrastructure that the setup creates.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureInfrastructure;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureInfrastructure) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The resources to collect telemetry from, for one cloud provider. Specify one provider.</p>
 * @public
 */
export type TelemetryManifestSource =
  | TelemetryManifestSource.AzureMember
  | TelemetryManifestSource.$UnknownMember;

/**
 * @public
 */
export namespace TelemetryManifestSource {
  /**
   * <p>The Azure scope items. Each <code>AzureScopeItem</code> specifies a set of Azure resources and the telemetry types to collect from them. You can specify up to 100 scope items.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureScopeItem[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureScopeItem[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Declares which resources in a cloud provider to collect telemetry from and which telemetry types to collect.</p>
 * @public
 */
export interface TelemetryManifest {
  /**
   * <p>The resources to collect telemetry from and the telemetry types to collect.</p>
   * @public
   */
  Source: TelemetryManifestSource | undefined;

  /**
   * <p>The choices for the infrastructure that the setup creates in your cloud provider, such as the subscription that contains the Event Hubs and their size. If you omit this value, the setup uses default settings. If an <code>AzureScopeItem</code> collects <code>ResourceLogs</code>, you must specify at least the Azure <code>SubscriptionId</code>.</p>
   * @public
   */
  Infrastructure?: TelemetryManifestInfrastructure | undefined;
}

/**
 * @public
 */
export interface GetConnectorTelemetryManifestOutput {
  /**
   * <p>The telemetry manifest.</p>
   * @public
   */
  Manifest: TelemetryManifest | undefined;

  /**
   * <p>The current version of the telemetry manifest. Pass this value as <code>ExpectedVersion</code> when you next call <code>PutConnectorTelemetryManifest</code>.</p>
   * @public
   */
  Version: number | undefined;

  /**
   * <p>The time when the telemetry manifest was last updated, in milliseconds since the Unix epoch.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface GetConnectorTelemetrySetupInput {
  /**
   * <p>The connector whose telemetry manifest you want to generate the setup from. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the connector</p> </li> <li> <p>The ID of the connector</p> </li> </ul>
   * @public
   */
  ConnectorIdentifier: string | undefined;

  /**
   * <p>The format of the setup artifacts. If you omit this value, the service uses the default format for the connector's provider (<code>BICEP</code> for an Azure connector). If the provider doesn't support the format, the service returns a <code>ValidationException</code>.</p>
   * @public
   */
  Format?: SetupFormat | undefined;
}

/**
 * <p>A setup artifact, which is one file in the requested format.</p>
 * @public
 */
export interface SetupArtifact {
  /**
   * <p>The suggested file name, for example <code>main.bicep</code>.</p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>The content of the artifact.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The format of the artifact.</p>
   * @public
   */
  Format: SetupFormat | undefined;

  /**
   * <p>The content type of the artifact, for example <code>text/plain</code>.</p>
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorTelemetrySetupOutput {
  /**
   * <p>The setup artifacts to apply in your cloud provider.</p>
   * @public
   */
  Artifacts: SetupArtifact[] | undefined;

  /**
   * <p>The permissions or roles in your cloud provider that you need to apply the artifacts, for example Azure Contributor and User Access Administrator.</p>
   * @public
   */
  RequiredPermissionsToApply?: string[] | undefined;

  /**
   * <p>The format of the setup artifacts.</p>
   * @public
   */
  Format: SetupFormat | undefined;

  /**
   * <p>The cloud provider that the setup artifacts are for.</p>
   * @public
   */
  Provider?: ConnectorProvider | undefined;

  /**
   * <p>The version of the telemetry manifest that the service generated the setup artifacts from.</p>
   * @public
   */
  ManifestVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetDatasetIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset integration to retrieve.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetDatasetIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset integration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the dataset integration.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The timestamp when the dataset integration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the dataset integration was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetS3TableIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration to retrieve.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetS3TableIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the S3 Table integration.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The current status of the S3 Table integration.</p>
   * @public
   */
  Status?: IntegrationStatus | undefined;

  /**
   * <p>The encryption configuration for the S3 Table integration.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket used as the destination for the table data.</p>
   * @public
   */
  DestinationTableBucketArn?: string | undefined;

  /**
   * <p>The timestamp when the S3 Table integration was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEnrichmentStatusOutput {
  /**
   * <p> The current status of the resource tags for telemetry feature (<code>Running</code>, <code>Stopped</code>, or <code>Impaired</code>). </p>
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Resource Explorer managed view used for resource tags for telemetry, if the feature is enabled. </p>
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * <p> Represents the status of a multi-region operation in a specific Amazon Web Services Region. This structure is used to report per-region progress for both telemetry evaluation and telemetry rule replication. </p>
 * @public
 */
export interface RegionStatus {
  /**
   * <p> The Amazon Web Services Region code (for example, <code>eu-west-1</code> or <code>us-west-2</code>) that this status applies to. </p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p> The status of the operation in this region. For telemetry evaluation, valid values include <code>STARTING</code>, <code>RUNNING</code>, and <code>FAILED_START</code>. For telemetry rules, valid values include <code>PENDING</code>, <code>ACTIVE</code>, and <code>FAILED</code>. </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p> The reason for a failure status in this region. This field is only populated when <code>Status</code> indicates a failure. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule in this spoke region. This field is only present for telemetry rule region statuses and is populated when the rule has been successfully created in the spoke region (status is <code>ACTIVE</code>). </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusOutput {
  /**
   * <p> The onboarding status of the telemetry config feature. </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p> Describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p> The Amazon Web Services Region that is designated as the home region for multi-region telemetry evaluation. The home region is the single management point for all multi-region operations on this account. This field is only present when multi-region telemetry evaluation is active. </p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p> A list of per-region telemetry evaluation statuses. Each entry indicates the evaluation status for a specific spoke region included in the multi-region configuration. This field is only present when multi-region telemetry evaluation is active. </p>
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  /**
   * <p> The onboarding status of the telemetry config feature for the organization. </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p> This field describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p> The Amazon Web Services Region that is designated as the home region for multi-region telemetry evaluation for the organization. The home region is the single management point for all multi-region operations on this organization. This field is only present when multi-region telemetry evaluation is active. </p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p> A list of per-region telemetry evaluation statuses for the organization. Each entry indicates the evaluation status for a specific spoke region included in the multi-region configuration. This field is only present when multi-region telemetry evaluation is active. </p>
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTelemetryPipelineInput {
  /**
   * <p>The identifier (name or ARN) of the telemetry pipeline to retrieve.</p>
   * @public
   */
  PipelineIdentifier: string | undefined;
}

/**
 * <p>A summary of source activation for an external-cloud telemetry pipeline, with the number of active sources and the total number of discovered sources.</p>
 * @public
 */
export interface SourceProgress {
  /**
   * <p>The number of discovered sources that are active and sending telemetry to the pipeline.</p>
   * @public
   */
  Active?: number | undefined;

  /**
   * <p>The total number of sources discovered for the pipeline.</p>
   * @public
   */
  Total?: number | undefined;
}

/**
 * <p>Provides detailed information about the status of a telemetry pipeline, including reasons for specific states.</p>
 * @public
 */
export interface TelemetryPipelineStatusReason {
  /**
   * <p>A description of the pipeline status reason, providing additional context about the current state.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Represents a complete telemetry pipeline resource with configuration, status, and metadata for data processing and transformation.</p>
 * @public
 */
export interface TelemetryPipeline {
  /**
   * <p>The timestamp when the telemetry pipeline was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The timestamp when the telemetry pipeline was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the telemetry pipeline.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the telemetry pipeline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The configuration that defines how the telemetry pipeline processes data.</p>
   * @public
   */
  Configuration?: TelemetryPipelineConfiguration | undefined;

  /**
   * <p>The current status of the telemetry pipeline.</p>
   * @public
   */
  Status?: TelemetryPipelineStatus | undefined;

  /**
   * <p>Additional information about the pipeline status, including reasons for failure states.</p>
   * @public
   */
  StatusReason?: TelemetryPipelineStatusReason | undefined;

  /**
   * <p>The key-value pairs associated with the telemetry pipeline resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the most recent refresh of the telemetry pipeline started. This field is only present for external-cloud pipelines that you have refreshed.</p>
   * @public
   */
  LastRefreshTimeStamp?: number | undefined;

  /**
   * <p>The progress of source activation for the telemetry pipeline. This field is only present for external-cloud pipelines.</p>
   * @public
   */
  SourceProgress?: SourceProgress | undefined;

  /**
   * <p>A summary of the pipeline configuration components.</p>
   * @public
   */
  ConfigurationSummary?: ConfigurationSummary | undefined;
}

/**
 * @public
 */
export interface GetTelemetryPipelineOutput {
  /**
   * <p>The complete telemetry pipeline resource information, including configuration, status, and metadata.</p>
   * @public
   */
  Pipeline?: TelemetryPipeline | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleInput {
  /**
   * <p> The identifier (name or ARN) of the telemetry rule to retrieve. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleOutput {
  /**
   * <p> The name of the telemetry rule. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p> The timestamp when the telemetry rule was created. </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p> The timestamp when the telemetry rule was last updated. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> The configuration details of the telemetry rule. </p>
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;

  /**
   * <p> The Amazon Web Services Region where the telemetry rule was originally created. For replicated rules in spoke regions, this indicates the region that manages the rule. For rules created without multi-region scope, this field is not present. </p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p> Indicates whether this telemetry rule is a replica that was created in this region through multi-region fan-out from the home region. Replicated rules cannot be directly updated or deleted in the spoke region. To modify a replicated rule, make changes in the home region. </p>
   * @public
   */
  IsReplicated?: boolean | undefined;

  /**
   * <p> A list of per-region replication statuses for the telemetry rule. Each entry indicates the replication status of the rule in a specific spoke region. This field is only present for rules created with multi-region scope. </p>
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationInput {
  /**
   * <p> The identifier (name or ARN) of the organization telemetry rule to retrieve. </p>
   * @public
   */
  RuleIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryRuleForOrganizationOutput {
  /**
   * <p> The name of the organization telemetry rule. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the organization telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p> The timestamp when the organization telemetry rule was created. </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p> The timestamp when the organization telemetry rule was last updated. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> The configuration details of the organization telemetry rule. </p>
   * @public
   */
  TelemetryRule?: TelemetryRule | undefined;

  /**
   * <p> The Amazon Web Services Region where the organization telemetry rule was originally created. For replicated rules in spoke regions, this indicates the region that manages the rule. For rules created without multi-region scope, this field is not present. </p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p> Indicates whether this organization telemetry rule is a replica that was created in this region through multi-region fan-out from the home region. Replicated rules cannot be directly updated or deleted in the spoke region. To modify a replicated rule, make changes in the home region. </p>
   * @public
   */
  IsReplicated?: boolean | undefined;

  /**
   * <p> A list of per-region replication statuses for the organization telemetry rule. Each entry indicates the replication status of the rule in a specific spoke region. This field is only present for rules created with multi-region scope. </p>
   * @public
   */
  RegionStatuses?: RegionStatus[] | undefined;
}

/**
 * @public
 */
export interface GetThirdPartyTelemetryEnrichmentInput {
  /**
   * <p>The identifier of the enrichment to return. You can specify one of the following:</p> <ul> <li> <p>The name of the enrichment.</p> </li> <li> <p>The Amazon Resource Name (ARN) of the enrichment.</p> </li> </ul>
   * @public
   */
  TelemetryEnrichmentIdentifier: string | undefined;
}

/**
 * <p>The third-party source configuration of an enrichment.</p>
 * @public
 */
export type TelemetrySourceConfigurationOutput =
  | TelemetrySourceConfigurationOutput.AzureMember
  | TelemetrySourceConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace TelemetrySourceConfigurationOutput {
  /**
   * <p>The configuration of the Microsoft Azure source.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureTelemetrySourceConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureTelemetrySourceConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetThirdPartyTelemetryEnrichmentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the enrichment.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the enrichment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current status of the enrichment. Valid values:</p> <ul> <li> <p> <code>Initializing</code> - CloudWatch is setting up the enrichment. Some telemetry can be enriched before setup completes.</p> </li> <li> <p> <code>Running</code> - The enrichment is active.</p> </li> <li> <p> <code>Stopped</code> - The enrichment is stopped.</p> </li> <li> <p> <code>Impaired</code> - The enrichment has a problem. <code>StatusReason</code> describes the problem.</p> </li> </ul>
   * @public
   */
  Status: ThirdPartyTelemetryEnrichmentStatus | undefined;

  /**
   * <p>The reason for the current status. This field is present when the status is <code>Impaired</code>.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The source configuration of the enrichment.</p>
   * @public
   */
  TelemetrySourceConfiguration: TelemetrySourceConfigurationOutput | undefined;

  /**
   * <p>The tags associated with the enrichment.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains summary information about an S3 Table integration for listing operations.</p>
 * @public
 */
export interface IntegrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 Table integration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The current status of the S3 Table integration.</p>
   * @public
   */
  Status?: IntegrationStatus | undefined;
}

/**
 * @public
 */
export interface ListCentralizationRulesForOrganizationInput {
  /**
   * <p>A string to filter organization centralization rules whose names begin with the specified prefix.</p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p>A flag determining whether to return organization centralization rules from all regions or only the current region.</p>
   * @public
   */
  AllRegions?: boolean | undefined;

  /**
   * <p>The maximum number of organization centralization rules to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCentralizationRulesForOrganizationOutput {
  /**
   * <p>A list of centralization rule summaries.</p>
   * @public
   */
  CentralizationRuleSummaries?: CentralizationRuleSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsInput {
  /**
   * <p>The maximum number of connectors to return in one call. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results, returned by a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsOutput {
  /**
   * <p>The connectors in the account and Region.</p>
   * @public
   */
  ConnectorSummaries: ConnectorSummary[] | undefined;

  /**
   * <p>The token to use in the next call to get the next page of results. Absent when there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetIntegrationsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetIntegrationsOutput {
  /**
   * <p>The dataset integrations in your account.</p>
   * @public
   */
  DatasetIntegrationSummaries: DatasetIntegrationSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesByConnectorInput {
  /**
   * <p>The connector to use for the query. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the connector</p> </li> <li> <p>The ID of the connector</p> </li> </ul>
   * @public
   */
  ConnectorIdentifier: string | undefined;

  /**
   * <p>What to list: one cloud provider, and one type of resource in that provider.</p>
   * @public
   */
  Selector: ConnectorQuery | undefined;

  /**
   * <p>The maximum number of results to return in one call. For an <code>EventHubs</code> query, a page can contain more results than this value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results, returned by a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesByConnectorOutput {
  /**
   * <p>The results, in the same shape as the <code>Selector</code> that you specified.</p>
   * @public
   */
  Results: ConnectorQueryResults | undefined;

  /**
   * <p>The token to use in the next call to get the next page of results. Absent when there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryInput {
  /**
   * <p> A string used to filter resources which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>. </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p> A list of resource types used to filter resources supported by telemetry config. If this parameter is provided, the service returns the resources in the same order as specified in the request. Currently supported resource types for discovery are:</p> <ul> <li> <p> <code>AWS::EC2::Instance</code> </p> </li> <li> <p> <code>AWS::EC2::VPC</code> </p> </li> <li> <p> <code>AWS::Lambda::Function</code> </p> </li> <li> <p> <code>AWS::EKS::Cluster</code> </p> </li> <li> <p> <code>AWS::WAFv2::WebACL</code> </p> </li> <li> <p> <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> (Network Load Balancers only)</p> </li> </ul>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p> A key-value pair to filter resources based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state. </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p> A key-value pair to filter resources based on tags associated with the resource. For more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a> </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p> A number field used to limit the number of results within the returned list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A model representing the state of a resource within an account according to telemetry config. </p>
 * @public
 */
export interface TelemetryConfiguration {
  /**
   * <p> The account ID which contains the resource managed in telemetry configuration. An example of a valid account ID is <code>012345678901</code>. </p>
   * @public
   */
  AccountIdentifier?: string | undefined;

  /**
   * <p> The configuration state for the resource, for example <code>\{ Logs: NotApplicable; Metrics: Enabled; Traces: NotApplicable; Insights: NotApplicable; \}</code>. </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p> The type of resource, for example <code>Amazon Web Services::EC2::Instance</code>, or <code>Amazon Web Services::EKS::Cluster</code>, etc. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The identifier of the resource, for example for Amazon VPC, it would be <code>vpc-1a2b3c4d5e6f1a2b3</code>. </p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p> Tags associated with the resource, for example <code>\{ Name: "ExampleInstance", Environment: "Development" \}</code>. </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p> The timestamp of the last change to the telemetry configuration for the resource. For example, <code>1728679196318</code>. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> Specifies the type of telemetry source for a resource, such as EKS cluster logs. </p>
   * @public
   */
  TelemetrySourceType?: TelemetrySourceType | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryOutput {
  /**
   * <p> A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the caller's account. </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationInput {
  /**
   * <p> A list of Amazon Web Services accounts used to filter the resources to those associated with the specified accounts. </p>
   * @public
   */
  AccountIdentifiers?: string[] | undefined;

  /**
   * <p> A string used to filter resources in the organization which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>. </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p> A list of resource types used to filter resources in the organization. If this parameter is provided, the service returns the resources in the same order as specified in the request. Currently supported resource types for discovery are:</p> <ul> <li> <p> <code>AWS::EC2::Instance</code> </p> </li> <li> <p> <code>AWS::EC2::VPC</code> </p> </li> <li> <p> <code>AWS::Lambda::Function</code> </p> </li> <li> <p> <code>AWS::EKS::Cluster</code> </p> </li> <li> <p> <code>AWS::WAFv2::WebACL</code> </p> </li> <li> <p> <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> (Network Load Balancers only)</p> </li> </ul>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p> A key-value pair to filter resources in the organization based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state. </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p> A key-value pair to filter resources in the organization based on tags associated with the resource. Fore more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a> </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p> A number field used to limit the number of results within the returned list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call provides this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationOutput {
  /**
   * <p> A list of telemetry configurations for Amazon Web Services resources supported by telemetry config in the organization. </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p> The token for the next set of items to return. A previous call provides this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListS3TableIntegrationsInput {
  /**
   * <p>The maximum number of S3 Table integrations to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListS3TableIntegrationsOutput {
  /**
   * <p>A list of S3 Table integration summaries containing key information about each integration.</p>
   * @public
   */
  IntegrationSummaries?: IntegrationSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule resource whose tags you want to list. </p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p> The list of tags associated with the telemetry rule resource. </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTelemetryPipelinesInput {
  /**
   * <p>The maximum number of telemetry pipelines to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a telemetry pipeline for listing operations.</p>
 * @public
 */
export interface TelemetryPipelineSummary {
  /**
   * <p>The timestamp when the telemetry pipeline was created.</p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p>The timestamp when the telemetry pipeline was last updated.</p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the telemetry pipeline.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the telemetry pipeline.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current status of the telemetry pipeline.</p>
   * @public
   */
  Status?: TelemetryPipelineStatus | undefined;

  /**
   * <p>The key-value pairs associated with the telemetry pipeline resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A summary of the pipeline configuration components.</p>
   * @public
   */
  ConfigurationSummary?: ConfigurationSummary | undefined;
}

/**
 * @public
 */
export interface ListTelemetryPipelinesOutput {
  /**
   * <p>A list of telemetry pipeline summaries containing key information about each pipeline.</p>
   * @public
   */
  PipelineSummaries?: TelemetryPipelineSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesInput {
  /**
   * <p> A string to filter telemetry rules whose names begin with the specified prefix. </p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p> The maximum number of telemetry rules to return in a single call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of results. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A summary of a telemetry rule's key properties. </p>
 * @public
 */
export interface TelemetryRuleSummary {
  /**
   * <p> The name of the telemetry rule. </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p> The timestamp when the telemetry rule was created. </p>
   * @public
   */
  CreatedTimeStamp?: number | undefined;

  /**
   * <p> The timestamp when the telemetry rule was last modified. </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;

  /**
   * <p> The type of Amazon Web Services resource the rule applies to. </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p> The type of telemetry (Logs, Metrics, Traces, or Insights) the rule configures. </p>
   * @public
   */
  TelemetryType?: TelemetryType | undefined;

  /**
   * <p> The types of telemetry sources configured for this rule, such as VPC Flow Logs or EKS audit logs. TelemetrySourceTypes must be correlated with the specific resource type. </p>
   * @public
   */
  TelemetrySourceTypes?: TelemetrySourceType[] | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesOutput {
  /**
   * <p> A list of telemetry rule summaries. </p>
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * <p> A token to resume pagination of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationInput {
  /**
   * <p> A string to filter organization telemetry rules whose names begin with the specified prefix. </p>
   * @public
   */
  RuleNamePrefix?: string | undefined;

  /**
   * <p> The list of account IDs to filter organization telemetry rules by their source accounts. </p>
   * @public
   */
  SourceAccountIds?: string[] | undefined;

  /**
   * <p> The list of organizational unit IDs to filter organization telemetry rules by their source organizational units. </p>
   * @public
   */
  SourceOrganizationUnitIds?: string[] | undefined;

  /**
   * <p> The maximum number of organization telemetry rules to return in a single call. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token for the next set of results. A previous call generates this token. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTelemetryRulesForOrganizationOutput {
  /**
   * <p> A list of organization telemetry rule summaries. </p>
   * @public
   */
  TelemetryRuleSummaries?: TelemetryRuleSummary[] | undefined;

  /**
   * <p> A token to resume pagination of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThirdPartyTelemetryEnrichmentsInput {
  /**
   * <p>Returns only the enrichments that have this status. Valid values:</p> <ul> <li> <p> <code>Initializing</code> - CloudWatch is setting up the enrichment. Some telemetry can be enriched before setup completes.</p> </li> <li> <p> <code>Running</code> - The enrichment is active.</p> </li> <li> <p> <code>Stopped</code> - The enrichment is stopped.</p> </li> <li> <p> <code>Impaired</code> - The enrichment has a problem. <code>StatusReason</code> describes the problem.</p> </li> </ul>
   * @public
   */
  Status?: ThirdPartyTelemetryEnrichmentStatus | undefined;

  /**
   * <p>Returns only the enrichments for this third-party telemetry source.</p>
   * @public
   */
  TelemetrySource?: ThirdPartyTelemetrySource | undefined;

  /**
   * <p>The maximum number of results to return in a single call. If you omit this parameter, the operation returns up to 100 results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. A previous call generates this token. If you omit this parameter, the operation returns the first page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary information about a third-party telemetry enrichment, as returned by <code>ListThirdPartyTelemetryEnrichments</code>.</p>
 * @public
 */
export interface ThirdPartyTelemetryEnrichmentSummary {
  /**
   * <p>The name of the enrichment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The third-party telemetry source of the enrichment.</p>
   * @public
   */
  TelemetrySource?: ThirdPartyTelemetrySource | undefined;

  /**
   * <p>The current status of the enrichment. Valid values:</p> <ul> <li> <p> <code>Initializing</code> - CloudWatch is setting up the enrichment. Some telemetry can be enriched before setup completes.</p> </li> <li> <p> <code>Running</code> - The enrichment is active.</p> </li> <li> <p> <code>Stopped</code> - The enrichment is stopped.</p> </li> <li> <p> <code>Impaired</code> - The enrichment has a problem. <code>StatusReason</code> describes the problem.</p> </li> </ul>
   * @public
   */
  Status?: ThirdPartyTelemetryEnrichmentStatus | undefined;
}

/**
 * @public
 */
export interface ListThirdPartyTelemetryEnrichmentsOutput {
  /**
   * <p>The enrichments in your account and Region.</p>
   * @public
   */
  TelemetryEnrichments?: ThirdPartyTelemetryEnrichmentSummary[] | undefined;

  /**
   * <p>A token to resume pagination of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutConnectorTelemetryManifestInput {
  /**
   * <p>The connector. Specify one of the following:</p> <ul> <li> <p>The Amazon Resource Name (ARN) of the connector</p> </li> <li> <p>The ID of the connector</p> </li> </ul>
   * @public
   */
  ConnectorIdentifier: string | undefined;

  /**
   * <p>The telemetry manifest.</p>
   * @public
   */
  Manifest: TelemetryManifest | undefined;

  /**
   * <p>The version of the telemetry manifest that you expect to replace, as returned by <code>GetConnectorTelemetryManifest</code>. Omit this value when you create the first telemetry manifest. If the value doesn't match the current version, the request fails with a <code>ConflictException</code>.</p>
   * @public
   */
  ExpectedVersion?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the operation completes no more than one time. If you use an Amazon Web Services SDK, the SDK generates this value and reuses it on retries. If this token matches a previous request with the same telemetry manifest, the service returns the stored version without an error. If you use the same token with a different telemetry manifest, the service returns a <code>ValidationException</code>. This operation is idempotent when you use the same token and parameters.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutConnectorTelemetryManifestOutput {
  /**
   * <p>The version of the telemetry manifest after this update.</p>
   * @public
   */
  Version: number | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEnrichmentOutput {
  /**
   * <p> The status of the resource tags for telemetry feature after the start operation (<code>Running</code>, <code>Stopped</code>, or <code>Impaired</code>). </p>
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Resource Explorer managed view created for resource tags for telemetry. </p>
   * @public
   */
  AwsResourceExplorerManagedViewArn?: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEvaluationInput {
  /**
   * <p> An optional list of Amazon Web Services Regions to include in multi-region telemetry evaluation. The current region is always implicitly included and must not be specified in this list. When provided, telemetry evaluation starts in the current region and propagates to all specified regions. Mutually exclusive with <code>AllRegions</code>. If neither <code>Regions</code> nor <code>AllRegions</code> is provided, the operation applies only to the current region. </p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p> If set to <code>true</code>, telemetry evaluation starts in all Amazon Web Services Regions where Amazon CloudWatch Observability Admin is available in the current partition. The current region becomes the home region for managing multi-region evaluation. When new regions become available, evaluation automatically expands to include them. Mutually exclusive with <code>Regions</code>. </p>
   * @public
   */
  AllRegions?: boolean | undefined;
}

/**
 * @public
 */
export interface StartTelemetryEvaluationForOrganizationInput {
  /**
   * <p> An optional list of Amazon Web Services Regions to include in multi-region telemetry evaluation for the organization. The current region is always implicitly included and must not be specified in this list. When provided, telemetry evaluation starts in the current region and propagates to all specified regions for the organization. Mutually exclusive with <code>AllRegions</code>. If neither <code>Regions</code> nor <code>AllRegions</code> is provided, the operation applies only to the current region. </p>
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * <p> If set to <code>true</code>, telemetry evaluation for the organization starts in all Amazon Web Services Regions where Amazon CloudWatch Observability Admin is available in the current partition. The current region becomes the home region for managing multi-region evaluation for the organization. When new regions become available, evaluation automatically expands to include them. Mutually exclusive with <code>Regions</code>. </p>
   * @public
   */
  AllRegions?: boolean | undefined;
}

/**
 * <p>The configuration of the third-party telemetry source that a new enrichment collects resource metadata from. Specify exactly one member.</p>
 * @public
 */
export type TelemetrySourceConfigurationInput =
  | TelemetrySourceConfigurationInput.AzureMember
  | TelemetrySourceConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace TelemetrySourceConfigurationInput {
  /**
   * <p>The configuration for a Microsoft Azure source.</p>
   * @public
   */
  export interface AzureMember {
    Azure: AzureTelemetrySourceConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Azure: (value: AzureTelemetrySourceConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartThirdPartyTelemetryEnrichmentInput {
  /**
   * <p>A name for the enrichment. The name must be unique in your account and Region. You can use the name instead of the ARN to identify the enrichment in other operations.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The third-party telemetry source to collect resource metadata from. Specify exactly one telemetry source.</p>
   * @public
   */
  TelemetrySourceConfiguration: TelemetrySourceConfigurationInput | undefined;

  /**
   * <p>The tags to associate with the enrichment resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartThirdPartyTelemetryEnrichmentOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the enrichment.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the enrichment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The status of the enrichment after the start operation. Valid values:</p> <ul> <li> <p> <code>Initializing</code> - CloudWatch is setting up the enrichment. Some telemetry can be enriched before setup completes.</p> </li> <li> <p> <code>Running</code> - The enrichment is active.</p> </li> <li> <p> <code>Stopped</code> - The enrichment is stopped.</p> </li> <li> <p> <code>Impaired</code> - The enrichment has a problem. <code>StatusReason</code> describes the problem.</p> </li> </ul>
   * @public
   */
  Status: ThirdPartyTelemetryEnrichmentStatus | undefined;

  /**
   * <p>The reason for the current status. This field is present when the status is <code>Impaired</code>.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The source configuration of the enrichment.</p>
   * @public
   */
  TelemetrySourceConfiguration: TelemetrySourceConfigurationOutput | undefined;

  /**
   * <p>The tags associated with the enrichment.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StopTelemetryEnrichmentOutput {
  /**
   * <p> The status of the resource tags for telemetry feature after the stop operation (<code>Running</code>, <code>Stopped</code>, or <code>Impaired</code>). </p>
   * @public
   */
  Status?: TelemetryEnrichmentStatus | undefined;
}

/**
 * @public
 */
export interface StopThirdPartyTelemetryEnrichmentInput {
  /**
   * <p>The identifier of the enrichment to stop. You can specify one of the following:</p> <ul> <li> <p>The name of the enrichment.</p> </li> <li> <p>The Amazon Resource Name (ARN) of the enrichment.</p> </li> </ul>
   * @public
   */
  TelemetryEnrichmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopThirdPartyTelemetryEnrichmentOutput {
  /**
   * <p>The name of the enrichment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The third-party telemetry source of the enrichment.</p>
   * @public
   */
  TelemetrySource: ThirdPartyTelemetrySource | undefined;

  /**
   * <p>The status of the enrichment after the stop operation. Valid values:</p> <ul> <li> <p> <code>Initializing</code> - CloudWatch is setting up the enrichment. Some telemetry can be enriched before setup completes.</p> </li> <li> <p> <code>Running</code> - The enrichment is active.</p> </li> <li> <p> <code>Stopped</code> - The enrichment is stopped.</p> </li> <li> <p> <code>Impaired</code> - The enrichment has a problem. <code>StatusReason</code> describes the problem.</p> </li> </ul>
   * @public
   */
  Status: ThirdPartyTelemetryEnrichmentStatus | undefined;

  /**
   * <p>The reason for the current status. This field is present when the status is <code>Impaired</code>.</p>
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule resource to tag. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p> The key-value pairs to add or update for the telemetry rule resource. </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartTelemetryPipelineRefreshInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the telemetry pipeline to refresh.</p>
   * @public
   */
  PipelineIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartTelemetryPipelineRefreshOutput {}

/**
 * @public
 */
export interface UpdateTelemetryPipelineInput {
  /**
   * <p>The ARN of the telemetry pipeline to update.</p>
   * @public
   */
  PipelineIdentifier: string | undefined;

  /**
   * <p>The new configuration for the telemetry pipeline, including updated sources, processors, and destinations.</p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryPipelineOutput {}

/**
 * <p>Represents a test record structure used for pipeline testing operations to validate data processing.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The data content of the test record used for pipeline validation.</p>
   * @public
   */
  Data?: string | undefined;

  /**
   * <p>The type of the test record, indicating the format or category of the data.</p>
   * @public
   */
  Type?: RecordFormat | undefined;
}

/**
 * @public
 */
export interface TestTelemetryPipelineInput {
  /**
   * <p>The sample records to process through the pipeline configuration for testing purposes.</p>
   * @public
   */
  Records: _Record[] | undefined;

  /**
   * <p>The pipeline configuration to test with the provided sample records.</p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;

  /**
   * <p>The type of telemetry signal to test. If not specified, defaults to log processing.</p>
   * @public
   */
  SignalType?: SignalType | undefined;
}

/**
 * <p>Contains detailed error information from pipeline test operations, providing structured error responses for better debugging and troubleshooting capabilities.</p>
 * @public
 */
export interface PipelineOutputError {
  /**
   * <p>The detailed error message describing what went wrong during the pipeline test operation for this record.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains the output from pipeline test operations, including processed records and any errors encountered.</p>
 * @public
 */
export interface PipelineOutput {
  /**
   * <p>The processed record output from the pipeline test operation.</p>
   * @public
   */
  Record?: _Record | undefined;

  /**
   * <p>Any error that occurred during the pipeline test operation for this record.</p>
   * @public
   */
  Error?: PipelineOutputError | undefined;
}

/**
 * @public
 */
export interface TestTelemetryPipelineOutput {
  /**
   * <p>The results of processing the test records through the pipeline configuration, including any outputs or errors.</p>
   * @public
   */
  Results?: PipelineOutput[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p> The Amazon Resource Name (ARN) of the telemetry rule resource to remove tags from. </p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p> The list of tag keys to remove from the telemetry rule resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCentralizationRuleForOrganizationInput {
  /**
   * <p>The identifier (name or ARN) of the organization centralization rule to update.</p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p>The configuration details for the organization-wide centralization rule, including the source configuration and the destination configuration to centralize telemetry data across the organization.</p>
   * @public
   */
  Rule: CentralizationRule | undefined;
}

/**
 * @public
 */
export interface UpdateCentralizationRuleForOrganizationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated organization centralization rule.</p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetIntegrationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset integration to update.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the dataset integration.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetIntegrationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated dataset integration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the updated dataset integration.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The timestamp when the dataset integration was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the dataset integration was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleInput {
  /**
   * <p> The identifier (name or ARN) of the telemetry rule to update. </p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p> The new configuration details for the telemetry rule. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationInput {
  /**
   * <p> The identifier (name or ARN) of the organization telemetry rule to update. </p>
   * @public
   */
  RuleIdentifier: string | undefined;

  /**
   * <p> The new configuration details for the organization telemetry rule, including resource type, telemetry type, and destination configuration. </p>
   * @public
   */
  Rule: TelemetryRule | undefined;
}

/**
 * @public
 */
export interface UpdateTelemetryRuleForOrganizationOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated organization telemetry rule. </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface ValidateTelemetryPipelineConfigurationInput {
  /**
   * <p>The pipeline configuration to validate for syntax and compatibility.</p>
   * @public
   */
  Configuration: TelemetryPipelineConfiguration | undefined;
}

/**
 * @public
 */
export interface ValidateTelemetryPipelineConfigurationOutput {
  /**
   * <p>A list of validation errors found in the pipeline configuration, if any.</p>
   * @public
   */
  Errors?: ValidationError[] | undefined;
}
