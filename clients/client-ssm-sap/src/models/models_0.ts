// smithy-typescript generated code
import type {
  AllocationType,
  ApplicationDiscoveryStatus,
  ApplicationStatus,
  ApplicationType,
  BackintMode,
  ClusterStatus,
  ComponentStatus,
  ComponentType,
  ConfigurationCheckOperationListingMode,
  ConfigurationCheckType,
  ConnectedEntityType,
  CredentialType,
  DatabaseConnectionMethod,
  DatabaseStatus,
  DatabaseType,
  FilterOperator,
  HostRole,
  OperationEventStatus,
  OperationMode,
  OperationStatus,
  PermissionActionType,
  ReplicationMode,
  RuleResultStatus,
} from "./enums";

/**
 * An SAP application registered with AWS Systems Manager for SAP.
 *
 * @public
 */
export interface Application {
  /**
   * The ID of the application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the application.
   *
   * @public
   */
  Type?: ApplicationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Application Registry.
   *
   * @public
   */
  AppRegistryArn?: string | undefined;

  /**
   * The status of the application.
   *
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * The latest discovery result for the application.
   *
   * @public
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus | undefined;

  /**
   * The components of the application.
   *
   * @public
   */
  Components?: string[] | undefined;

  /**
   * The time at which the application was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The Amazon Resource Names of the associated AWS Systems Manager for SAP applications.
   *
   * @public
   */
  AssociatedApplicationArns?: string[] | undefined;
}

/**
 * The credentials of your SAP application.
 *
 * @public
 */
export interface ApplicationCredential {
  /**
   * The name of the SAP HANA database.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The type of the application credentials.
   *
   * @public
   */
  CredentialType: CredentialType | undefined;

  /**
   * The secret ID created in AWS Secrets Manager to store the credentials of the SAP application.
   *
   * @public
   */
  SecretId: string | undefined;
}

/**
 * The summary of the SAP application registered with AWS Systems Manager for SAP.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The ID of the application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The status of the latest discovery.
   *
   * @public
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus | undefined;

  /**
   * The type of the application.
   *
   * @public
   */
  Type?: ApplicationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags on the application.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Provides information of the IP address.
 *
 * @public
 */
export interface IpAddressMember {
  /**
   * The IP address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The primary IP address.
   *
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * The type of allocation for the IP address.
   *
   * @public
   */
  AllocationType?: AllocationType | undefined;
}

/**
 * Describes the properties of the associated host.
 *
 * @public
 */
export interface AssociatedHost {
  /**
   * The name of the host.
   *
   * @public
   */
  Hostname?: string | undefined;

  /**
   * The ID of the Amazon EC2 instance.
   *
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * The IP addresses of the associated host.
   *
   * @public
   */
  IpAddresses?: IpAddressMember[] | undefined;

  /**
   * The version of the operating system.
   *
   * @public
   */
  OsVersion?: string | undefined;
}

/**
 * Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP HANA database with AWS Backup or Amazon S3.
 *
 * @public
 */
export interface BackintConfig {
  /**
   * AWS service for your database backup.
   *
   * @public
   */
  BackintMode: BackintMode | undefined;

  /**
   * @public
   */
  EnsureNoBackupInProcess: boolean | undefined;
}

/**
 * The connection specifications for the database.
 *
 * @public
 */
export interface DatabaseConnection {
  /**
   * The method of connection.
   *
   * @public
   */
  DatabaseConnectionMethod?: DatabaseConnectionMethod | undefined;

  /**
   * The Amazon Resource Name of the connected SAP HANA database.
   *
   * @public
   */
  DatabaseArn?: string | undefined;

  /**
   * The IP address for connection.
   *
   * @public
   */
  ConnectionIp?: string | undefined;
}

/**
 * Describes the properties of the Dedicated Host.
 *
 * @public
 */
export interface Host {
  /**
   * The name of the Dedicated Host.
   *
   * @public
   */
  HostName?: string | undefined;

  /**
   * The IP address of the Dedicated Host.
   *
   * @public
   */
  HostIp?: string | undefined;

  /**
   * The ID of Amazon EC2 instance.
   *
   * @public
   */
  EC2InstanceId?: string | undefined;

  /**
   * The instance ID of the instance on the Dedicated Host.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The role of the Dedicated Host.
   *
   * @public
   */
  HostRole?: HostRole | undefined;

  /**
   * The version of the operating system.
   *
   * @public
   */
  OsVersion?: string | undefined;
}

/**
 * Details of the SAP HANA system replication for the instance.
 *
 * @public
 */
export interface Resilience {
  /**
   * The tier of the component.
   *
   * @public
   */
  HsrTier?: string | undefined;

  /**
   * The replication mode of the component.
   *
   * @public
   */
  HsrReplicationMode?: ReplicationMode | undefined;

  /**
   * The operation mode of the component.
   *
   * @public
   */
  HsrOperationMode?: OperationMode | undefined;

  /**
   * The cluster status of the component.
   *
   * @public
   */
  ClusterStatus?: ClusterStatus | undefined;

  /**
   * Indicates if or not enqueue replication is enabled for the ASCS component.
   *
   * @public
   */
  EnqueueReplication?: boolean | undefined;
}

/**
 * The SAP component of your application.
 *
 * @public
 */
export interface Component {
  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The SAP System Identifier of the application component.
   *
   * @public
   */
  Sid?: string | undefined;

  /**
   * The SAP system number of the application component.
   *
   * @public
   */
  SystemNumber?: string | undefined;

  /**
   * The parent component of a highly available environment. For example, in a highly available SAP on AWS workload, the parent component consists of the entire setup, including the child components.
   *
   * @public
   */
  ParentComponent?: string | undefined;

  /**
   * The child components of a highly available environment. For example, in a highly available SAP on AWS workload, the child component consists of the primary and secondar instances.
   *
   * @public
   */
  ChildComponents?: string[] | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The type of the component.
   *
   * @public
   */
  ComponentType?: ComponentType | undefined;

  /**
   * The status of the component.
   *
   * - ACTIVATED - this status has been deprecated.
   * - STARTING - the component is in the process of being started.
   * - STOPPED - the component is not running.
   * - STOPPING - the component is in the process of being stopped.
   * - RUNNING - the component is running.
   * - RUNNING_WITH_ERROR - one or more child component(s) of the parent component is not running. Call [`GetComponent`](https://docs.aws.amazon.com/ssmsap/latest/APIReference/API_GetComponent.html) to review the status of each child component.
   * - UNDEFINED - AWS Systems Manager for SAP cannot provide the component status based on the discovered information. Verify your SAP application.
   *
   * @public
   */
  Status?: ComponentStatus | undefined;

  /**
   * The hostname of the component.
   *
   * @public
   */
  SapHostname?: string | undefined;

  /**
   * The SAP feature of the component.
   *
   * @public
   */
  SapFeature?: string | undefined;

  /**
   * The kernel version of the component.
   *
   * @public
   */
  SapKernelVersion?: string | undefined;

  /**
   * The SAP HANA version of the component.
   *
   * @public
   */
  HdbVersion?: string | undefined;

  /**
   * Details of the SAP HANA system replication for the component.
   *
   * @public
   */
  Resilience?: Resilience | undefined;

  /**
   * The associated host of the component.
   *
   * @public
   */
  AssociatedHost?: AssociatedHost | undefined;

  /**
   * The SAP HANA databases of the component.
   *
   * @public
   */
  Databases?: string[] | undefined;

  /**
   * The hosts of the component.
   *
   * @deprecated This shape is no longer used. Please use AssociatedHost.
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * The primary host of the component.
   *
   * @deprecated This shape is no longer used. Please use AssociatedHost.
   * @public
   */
  PrimaryHost?: string | undefined;

  /**
   * The connection specifications for the database of the component.
   *
   * @public
   */
  DatabaseConnection?: DatabaseConnection | undefined;

  /**
   * The time at which the component was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * This is information about the component of your SAP application, such as Web Dispatcher.
 *
 * @public
 */
export interface ComponentInfo {
  /**
   * This string is the type of the component.
   *
   * Accepted value is `WD`.
   *
   * @public
   */
  ComponentType: ComponentType | undefined;

  /**
   * This string is the SAP System ID of the component.
   *
   * Accepted values are alphanumeric.
   *
   * @public
   */
  Sid: string | undefined;

  /**
   * This is the Amazon EC2 instance on which your SAP component is running.
   *
   * Accepted values are alphanumeric.
   *
   * @public
   */
  Ec2InstanceId: string | undefined;
}

/**
 * The summary of the component.
 *
 * @public
 */
export interface ComponentSummary {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The type of the component.
   *
   * @public
   */
  ComponentType?: ComponentType | undefined;

  /**
   * The tags of the component.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component summary.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Represents a configuration check definition supported by AWS Systems Manager for SAP.
 *
 * @public
 */
export interface ConfigurationCheckDefinition {
  /**
   * The unique identifier of the configuration check.
   *
   * @public
   */
  Id?: ConfigurationCheckType | undefined;

  /**
   * The name of the configuration check.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of what the configuration check validates.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The list of SSMSAP application types that this configuration check can be evaluated against.
   *
   * @public
   */
  ApplicableApplicationTypes?: ApplicationType[] | undefined;
}

/**
 * A summary of rule results, providing counts for each status type.
 *
 * @public
 */
export interface RuleStatusCounts {
  /**
   * The number of rules that failed.
   *
   * @public
   */
  Failed?: number | undefined;

  /**
   * The number of rules that returned warnings.
   *
   * @public
   */
  Warning?: number | undefined;

  /**
   * The number of rules that returned informational results.
   *
   * @public
   */
  Info?: number | undefined;

  /**
   * The number of rules that passed.
   *
   * @public
   */
  Passed?: number | undefined;

  /**
   * The number of rules with unknown status.
   *
   * @public
   */
  Unknown?: number | undefined;
}

/**
 * Represents a configuration check operation that has been executed against an application.
 *
 * @public
 */
export interface ConfigurationCheckOperation {
  /**
   * The unique identifier of the configuration check operation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the application against which the configuration check was performed.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The current status of the configuration check operation.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * A message providing additional details about the status of the configuration check operation.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The unique identifier of the configuration check that was performed.
   *
   * @public
   */
  ConfigurationCheckId?: ConfigurationCheckType | undefined;

  /**
   * The name of the configuration check that was performed.
   *
   * @public
   */
  ConfigurationCheckName?: string | undefined;

  /**
   * A description of the configuration check that was performed.
   *
   * @public
   */
  ConfigurationCheckDescription?: string | undefined;

  /**
   * The time at which the configuration check operation started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which the configuration check operation completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A summary of all the rule results, showing counts for each status type.
   *
   * @public
   */
  RuleStatusCounts?: RuleStatusCounts | undefined;
}

/**
 * The SAP HANA database of the application registered with AWS Systems Manager for SAP.
 *
 * @public
 */
export interface Database {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The credentials of the database.
   *
   * @public
   */
  Credentials?: ApplicationCredential[] | undefined;

  /**
   * The ID of the SAP HANA database.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The name of the database.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The type of the database.
   *
   * @public
   */
  DatabaseType?: DatabaseType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The status of the database.
   *
   * @public
   */
  Status?: DatabaseStatus | undefined;

  /**
   * The primary host of the database.
   *
   * @public
   */
  PrimaryHost?: string | undefined;

  /**
   * The SQL port of the database.
   *
   * @public
   */
  SQLPort?: number | undefined;

  /**
   * The time at which the database was last updated.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The Amazon Resource Names of the connected AWS Systems Manager for SAP components.
   *
   * @public
   */
  ConnectedComponentArns?: string[] | undefined;
}

/**
 * The summary of the database.
 *
 * @public
 */
export interface DatabaseSummary {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The ID of the database.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The type of the database.
   *
   * @public
   */
  DatabaseType?: DatabaseType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The tags of the database.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePermissionInput {
  /**
   * Delete or restore the permissions on the target database.
   *
   * @public
   */
  ActionType?: PermissionActionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source resource.
   *
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePermissionOutput {
  /**
   * The policy that removes permissions on the target database.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterApplicationInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterApplicationOutput {}

/**
 * A specific result obtained by specifying the name, value, and operator.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The filter values. Filter values are case-sensitive. If you specify multiple values for a filter, the values are joined with an OR, and the request returns all results that match any of the specified values
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The operator for the filter.
   *
   * @public
   */
  Operator: FilterOperator | undefined;
}

/**
 * @public
 */
export interface GetApplicationInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application registry.
   *
   * @public
   */
  AppRegistryArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationOutput {
  /**
   * Returns all of the metadata of an application registered with AWS Systems Manager for SAP.
   *
   * @public
   */
  Application?: Application | undefined;

  /**
   * The tags of a registered application.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetComponentInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetComponentOutput {
  /**
   * The component of an application registered with AWS Systems Manager for SAP.
   *
   * @public
   */
  Component?: Component | undefined;

  /**
   * The tags of a component.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConfigurationCheckOperationInput {
  /**
   * The ID of the configuration check operation.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationCheckOperationOutput {
  /**
   * Returns the details of a configuration check operation.
   *
   * @public
   */
  ConfigurationCheckOperation?: ConfigurationCheckOperation | undefined;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The ID of the database.
   *
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  DatabaseArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * The SAP HANA database of an application registered with AWS Systems Manager for SAP.
   *
   * @public
   */
  Database?: Database | undefined;

  /**
   * The tags of a database.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOperationInput {
  /**
   * The ID of the operation.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * The operations performed by AWS Systems Manager for SAP.
 *
 * @public
 */
export interface Operation {
  /**
   * The ID of the operation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of the operation.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The status of the operation.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * The status message of the operation.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The properties of the operation.
   *
   * @public
   */
  Properties?: Record<string, string | null> | undefined;

  /**
   * The resource type of the operation.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The resource ID of the operation.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the operation.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The start time of the operation.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the operation.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The time at which the operation was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetOperationOutput {
  /**
   * Returns the details of an operation.
   *
   * @public
   */
  Operation?: Operation | undefined;
}

/**
 * @public
 */
export interface GetResourcePermissionInput {
  /**
   * @public
   */
  ActionType?: PermissionActionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePermissionOutput {
  /**
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsInput {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filter of name, value, and operator.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * The applications registered with AWS Systems Manager for SAP.
   *
   * @public
   */
  Applications?: ApplicationSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * If you do not specify a value for MaxResults, the request returns 50 items per page by default.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * List of components registered with AWS System Manager for SAP.
   *
   * @public
   */
  Components?: ComponentSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckDefinitionsInput {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckDefinitionsOutput {
  /**
   * The configuration check types supported by AWS Systems Manager for SAP.
   *
   * @public
   */
  ConfigurationChecks?: ConfigurationCheckDefinition[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckOperationsInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The mode for listing configuration check operations. Defaults to "LATEST_PER_CHECK".
   *
   * - LATEST_PER_CHECK - Will list the latest configuration check operation per check type.
   * - ALL_OPERATIONS - Will list all configuration check operations performed on the application.
   *
   * @public
   */
  ListMode?: ConfigurationCheckOperationListingMode | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters of an operation.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckOperationsOutput {
  /**
   * The configuration check operations performed by AWS Systems Manager for SAP.
   *
   * @public
   */
  ConfigurationCheckOperations?: ConfigurationCheckOperation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the component.
   *
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * The SAP HANA databases of an application.
   *
   * @public
   */
  Databases?: DatabaseSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOperationEventsInput {
  /**
   * The ID of the operation.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * If you do not specify a value for `MaxResults`, the request returns 50 items per page by default.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optionally specify filters to narrow the returned operation event items.
   *
   * Valid filter names include `status`, `resourceID`, and `resourceType`. The valid operator for all three filters is `Equals`.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * The resource contains a `ResourceArn` and the `ResourceType`.
 *
 * @public
 */
export interface Resource {
  /**
   * The Amazon Resource Name (ARN) of the source resource.
   *
   * Example of `ResourceArn`: "`arn:aws:ec2:us-east-1:111111111111:instance/i-abcdefgh987654321`"
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource type.
   *
   * Example of `ResourceType`: "`AWS::SystemsManagerSAP::Component`" or "`AWS::EC2::Instance`".
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * An operation event returns details for an operation, including key milestones which can be used to monitor and track operations in progress.
 *
 * Operation events contain:
 *
 * - Description string
 * - Resource, including its ARN and type
 * - Status
 * - StatusMessage string
 * - TimeStamp
 *
 * Operation event examples include StartApplication or StopApplication.
 *
 * @public
 */
export interface OperationEvent {
  /**
   * A description of the operation event. For example, "Stop the EC2 instance i-abcdefgh987654321".
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The resource involved in the operations event.
   *
   * Contains `ResourceArn` ARN and `ResourceType`.
   *
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * The status of the operation event. The possible statuses are: `IN_PROGRESS`, `COMPLETED`, and `FAILED`.
   *
   * @public
   */
  Status?: OperationEventStatus | undefined;

  /**
   * The status message relating to a specific operation event.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The timestamp of the specified operation event.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListOperationEventsOutput {
  /**
   * A returned list of operation events that meet the filter criteria.
   *
   * @public
   */
  OperationEvents?: OperationEvent[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOperationsInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filters of an operation.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListOperationsOutput {
  /**
   * List of operations performed by AWS Systems Manager for SAP.
   *
   * @public
   */
  Operations?: Operation[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubCheckResultsInput {
  /**
   * The ID of the configuration check operation.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the result of a sub-check within a configuration check operation.
 *
 * @public
 */
export interface SubCheckResult {
  /**
   * The unique identifier of the sub-check result.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the sub-check.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of what the sub-check validates.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of references or documentation links related to the sub-check.
   *
   * @public
   */
  References?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSubCheckResultsOutput {
  /**
   * The sub-check results of a configuration check operation.
   *
   * @public
   */
  SubCheckResults?: SubCheckResult[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubCheckRuleResultsInput {
  /**
   * The ID of the sub check result.
   *
   * @public
   */
  SubCheckResultId: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the result of a single rule within a configuration check.
 *
 * @public
 */
export interface RuleResult {
  /**
   * The unique identifier of the rule result.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A description of what the rule validates.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the rule result.
   *
   * @public
   */
  Status?: RuleResultStatus | undefined;

  /**
   * A message providing details about the rule result.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Additional metadata associated with the rule result.
   *
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListSubCheckRuleResultsOutput {
  /**
   * The rule results of a sub-check belonging to a configuration check operation.
   *
   * @public
   */
  RuleResults?: RuleResult[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutResourcePermissionInput {
  /**
   * @public
   */
  ActionType: PermissionActionType | undefined;

  /**
   * @public
   */
  SourceResourceArn: string | undefined;

  /**
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePermissionOutput {
  /**
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface RegisterApplicationInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The type of the application.
   *
   * @public
   */
  ApplicationType: ApplicationType | undefined;

  /**
   * The Amazon EC2 instances on which your SAP application is running.
   *
   * @public
   */
  Instances: string[] | undefined;

  /**
   * The SAP instance number of the application.
   *
   * @public
   */
  SapInstanceNumber?: string | undefined;

  /**
   * The System ID of the application.
   *
   * @public
   */
  Sid?: string | undefined;

  /**
   * The tags to be attached to the SAP application.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The credentials of the SAP application.
   *
   * @public
   */
  Credentials?: ApplicationCredential[] | undefined;

  /**
   * The Amazon Resource Name of the SAP HANA database.
   *
   * @public
   */
  DatabaseArn?: string | undefined;

  /**
   * This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.
   *
   * This is an array of ApplicationComponent objects. You may input 0 to 5 items.
   *
   * @public
   */
  ComponentsInfo?: ComponentInfo[] | undefined;
}

/**
 * @public
 */
export interface RegisterApplicationOutput {
  /**
   * The application registered with AWS Systems Manager for SAP.
   *
   * @public
   */
  Application?: Application | undefined;

  /**
   * The ID of the operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationOutput {
  /**
   * The ID of the operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRefreshInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRefreshOutput {
  /**
   * The ID of the operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationChecksInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The list of configuration checks to perform.
   *
   * @public
   */
  ConfigurationCheckIds?: ConfigurationCheckType[] | undefined;
}

/**
 * @public
 */
export interface StartConfigurationChecksOutput {
  /**
   * The configuration check operations that were started.
   *
   * @public
   */
  ConfigurationCheckOperations?: ConfigurationCheckOperation[] | undefined;
}

/**
 * @public
 */
export interface StopApplicationInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Specify the `ConnectedEntityType`. Accepted type is `DBMS`.
   *
   * If this parameter is included, the connected DBMS (Database Management System) will be stopped.
   *
   * @public
   */
  StopConnectedEntity?: ConnectedEntityType | undefined;

  /**
   * Boolean. If included and if set to `True`, the StopApplication operation will shut down the associated Amazon EC2 instance in addition to the application.
   *
   * @public
   */
  IncludeEc2InstanceShutdown?: boolean | undefined;
}

/**
 * @public
 */
export interface StopApplicationOutput {
  /**
   * The ID of the operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags on a resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Adds/updates or removes credentials for applications registered with AWS Systems Manager for SAP.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateApplicationSettingsInput {
  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The credentials to be added or updated.
   *
   * @public
   */
  CredentialsToAddOrUpdate?: ApplicationCredential[] | undefined;

  /**
   * The credentials to be removed.
   *
   * @public
   */
  CredentialsToRemove?: ApplicationCredential[] | undefined;

  /**
   * Installation of AWS Backint Agent for SAP HANA.
   *
   * @public
   */
  Backint?: BackintConfig | undefined;

  /**
   * The Amazon Resource Name of the SAP HANA database that replaces the current SAP HANA connection with the SAP_ABAP application.
   *
   * @public
   */
  DatabaseArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsOutput {
  /**
   * The update message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The IDs of the operations.
   *
   * @public
   */
  OperationIds?: string[] | undefined;
}
