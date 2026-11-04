// smithy-typescript generated code
import type {
  DestinationCategory,
  MetricUnit,
  MonitorLocalResourceType,
  MonitorMetric,
  MonitorRemoteResourceType,
  MonitorStatus,
  QueryStatus,
  ScopeStatus,
  TargetType,
  WorkloadInsightsMetric,
} from "./enums";

/**
 * A local resource is the host where the agent is installed. Local resources can be a a subnet, a VPC, an Availability Zone, an EKS cluster or an Amazon Web Services Region.
 *
 * @public
 */
export interface MonitorLocalResource {
  /**
   * The type of the local resource. Valid values are `AWS::EC2::VPC` `AWS::AvailabilityZone`, `AWS::EC2::Subnet`, `AWS::EKS::Cluster`, or `AWS::Region`.
   *
   * @public
   */
  type: MonitorLocalResourceType | undefined;

  /**
   * The identifier of the local resource. The values you can specify are the following:
   *
   * - For a VPC, subnet or EKS cluster, this identifier is the VPC Amazon Resource Name (ARN), subnet ARN or cluster ARN.
   * - For an Availability Zone, this identifier is the AZ name, for example, us-west-2b.
   * - For a Region, this identifier is the Region name, for example, us-west-2.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * A remote resource is the other endpoint in a network flow. That is, one endpoint is the local resource and the other is the remote resource. The values you can specify are the following:
 *
 * - For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN.
 * - For a service, this identifier is one of the following strings: `S3` or `DynamoDB`.
 * - For an Availability Zone, this identifier is the AZ name, for example, us-west-2b.
 * - For a Region, this identifier is the Region name, for example, us-west-2.
 *
 * When a remote resource is an Amazon Web Services Region, Network Flow Monitor provides network performance measurements up to the edge of the Region that you specify.
 *
 * @public
 */
export interface MonitorRemoteResource {
  /**
   * The type of the remote resource. Valid values are `AWS::EC2::VPC` `AWS::AvailabilityZone`, `AWS::EC2::Subnet`, `AWS::AWSService`, or `AWS::Region`.
   *
   * @public
   */
  type: MonitorRemoteResourceType | undefined;

  /**
   * The identifier of the remote resource. For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN. For an Availability Zone, this identifier is the AZ name, for example, us-west-2b. For an Amazon Web Services Region , this identifier is the Region name, for example, us-west-2.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The local resources to monitor. A local resource in a workload is the location of the host, or hosts, where the Network Flow Monitor agent is installed. For example, if a workload consists of an interaction between a web service and a backend database (for example, Amazon Dynamo DB), the subnet with the EC2 instance that hosts the web service, which also runs the agent, is the local resource.
   *
   * Be aware that all local resources must belong to the current Region.
   *
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * The remote resources to monitor. A remote resource is the other endpoint in the bi-directional flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.
   *
   * When you specify remote resources, be aware that specific combinations of resources are allowed and others are not, including the following constraints:
   *
   * - All remote resources that you specify must all belong to a single Region.
   * - If you specify Amazon Web Services services as remote resources, any other remote resources that you specify must be in the current Region.
   * - When you specify a remote resource for another Region, you can only specify the `Region` resource type. You cannot specify a subnet, VPC, or Availability Zone in another Region.
   * - If you leave the `RemoteResources` parameter empty, the monitor will include all network flows that terminate in the current Region.
   *
   * @public
   */
  remoteResources?: MonitorRemoteResource[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope for the monitor.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for a monitor. You can add a maximum of 200 tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The status of a monitor. The status can be one of the following
   *
   * - `PENDING`: The monitor is in the process of being created.
   * - `ACTIVE`: The monitor is active.
   * - `INACTIVE`: The monitor is inactive.
   * - `ERROR`: Monitor creation failed due to an error.
   * - `DELETING`: The monitor is in the process of being deleted.
   *
   * @public
   */
  monitorStatus: MonitorStatus | undefined;

  /**
   * The local resources to monitor. A local resource in a workload is the location of hosts where the Network Flow Monitor agent is installed.
   *
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * The remote resources to monitor. A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.
   *
   * @public
   */
  remoteResources: MonitorRemoteResource[] | undefined;

  /**
   * The date and time when the monitor was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The last date and time that the monitor was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The tags for a monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A target ID is an internally-generated identifier for a target. A target allows you to identify all the resources in a Network Flow Monitor scope. Currently, a target is always an Amazon Web Services account.
 *
 * @public
 */
export type TargetId =
  | TargetId.AccountIdMember
  | TargetId.$UnknownMember;

/**
 * @public
 */
export namespace TargetId {
  /**
   * The identifier for the account for a target.
   *
   * @public
   */
  export interface AccountIdMember {
    accountId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accountId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A target identifier is a pair of identifying information for a scope that is included in a target. A target identifier is made up of a target ID and a target type. Currently the target ID is always an account ID and the target type is always ACCOUNT.
 *
 * @public
 */
export interface TargetIdentifier {
  /**
   * The identifier for a target, which is currently always an account ID .
   *
   * @public
   */
  targetId: TargetId | undefined;

  /**
   * The type of a target. A target type is currently always `ACCOUNT`.
   *
   * @public
   */
  targetType: TargetType | undefined;
}

/**
 * A target resource in a scope. The resource is identified by a Region and an account, defined by a target identifier. A target identifier is made up of a target ID (currently always an account ID) and a target type (currently always `ACCOUNT`).
 *
 * @public
 */
export interface TargetResource {
  /**
   * A target identifier is a pair of identifying information for a scope. A target identifier is made up of a targetID (currently always an account ID) and a targetType (currently always an account).
   *
   * @public
   */
  targetIdentifier: TargetIdentifier | undefined;

  /**
   * The Amazon Web Services Region for the scope.
   *
   * @public
   */
  region: string | undefined;
}

/**
 * @public
 */
export interface CreateScopeInput {
  /**
   * The targets to define the scope to be monitored. A target is an array of targetResources, which are currently Region-account pairs, defined by targetResource constructs.
   *
   * @public
   */
  targets: TargetResource[] | undefined;

  /**
   * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for a scope. You can add a maximum of 200 tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateScopeOutput {
  /**
   * The identifier for the scope that includes the resources you want to get metrics for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The status for a scope. The status can be one of the following: `SUCCEEDED`, `IN_PROGRESS`, `FAILED`, `DEACTIVATING`, or `DEACTIVATED`.
   *
   * A status of `DEACTIVATING` means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of `DEACTIVATED` means that the deactivating process is complete.
   *
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The tags for a scope.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * The name of the monitor to delete.
   *
   * @public
   */
  monitorName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorOutput {}

/**
 * @public
 */
export interface DeleteScopeInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteScopeOutput {}

/**
 * @public
 */
export interface GetMonitorInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The status of a monitor. The status can be one of the following
   *
   * - `PENDING`: The monitor is in the process of being created.
   * - `ACTIVE`: The monitor is active.
   * - `INACTIVE`: The monitor is inactive.
   * - `ERROR`: Monitor creation failed due to an error.
   * - `DELETING`: The monitor is in the process of being deleted.
   *
   * @public
   */
  monitorStatus: MonitorStatus | undefined;

  /**
   * The local resources to monitor. A local resource in a workload is the location of the hosts where the Network Flow Monitor agent is installed.
   *
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * The remote resources to monitor. A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.
   *
   * @public
   */
  remoteResources: MonitorRemoteResource[] | undefined;

  /**
   * The date and time when the monitor was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the monitor was last modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The tags for a monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsMonitorTopContributorsInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Meta data about Kubernetes resources.
 *
 * @public
 */
export interface KubernetesMetadata {
  /**
   * The service name for a local resource.
   *
   * @public
   */
  localServiceName?: string | undefined;

  /**
   * The name of the pod for a local resource.
   *
   * @public
   */
  localPodName?: string | undefined;

  /**
   * The namespace of the pod for a local resource.
   *
   * @public
   */
  localPodNamespace?: string | undefined;

  /**
   * The service name for a remote resource.
   *
   * @public
   */
  remoteServiceName?: string | undefined;

  /**
   * The name of the pod for a remote resource.
   *
   * @public
   */
  remotePodName?: string | undefined;

  /**
   * The namespace of the pod for a remote resource.
   *
   * @public
   */
  remotePodNamespace?: string | undefined;
}

/**
 * A section of the network that a network flow has traveled through.
 *
 * @public
 */
export interface TraversedComponent {
  /**
   * The identifier for the traversed component.
   *
   * @public
   */
  componentId?: string | undefined;

  /**
   * The type of component that was traversed.
   *
   * @public
   */
  componentType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a traversed component.
   *
   * @public
   */
  componentArn?: string | undefined;

  /**
   * The service name for the traversed component.
   *
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * A set of information for a top contributor network flow in a monitor. In a monitor, Network Flow Monitor returns information about the network flows for top contributors for each metric. Top contributors are network flows with the top values for each metric type.
 *
 * @public
 */
export interface MonitorTopContributorsRow {
  /**
   * The IP address of the local resource for a top contributor network flow.
   *
   * @public
   */
  localIp?: string | undefined;

  /**
   * The secure network address translation (SNAT) IP address for a top contributor network flow.
   *
   * @public
   */
  snatIp?: string | undefined;

  /**
   * The instance identifier for the local resource for a top contributor network flow.
   *
   * @public
   */
  localInstanceId?: string | undefined;

  /**
   * The VPC ID for a top contributor network flow for the local resource.
   *
   * @public
   */
  localVpcId?: string | undefined;

  /**
   * The Amazon Web Services Region for the local resource for a top contributor network flow.
   *
   * @public
   */
  localRegion?: string | undefined;

  /**
   * The Availability Zone for the local resource for a top contributor network flow.
   *
   * @public
   */
  localAz?: string | undefined;

  /**
   * The subnet ID for the local resource for a top contributor network flow.
   *
   * @public
   */
  localSubnetId?: string | undefined;

  /**
   * The target port.
   *
   * @public
   */
  targetPort?: number | undefined;

  /**
   * The destination category for a top contributors row. Destination categories can be one of the following:
   *
   * - `INTRA_AZ`: Top contributor network flows within a single Availability Zone
   * - `INTER_AZ`: Top contributor network flows between Availability Zones
   * - `INTER_REGION`: Top contributor network flows between Regions (to the edge of another Region)
   * - `INTER_VPC`: Top contributor network flows between VPCs
   * - `AWS_SERVICES`: Top contributor network flows to or from Amazon Web Services services
   * - `UNCLASSIFIED`: Top contributor network flows that do not have a bucket classification
   *
   * @public
   */
  destinationCategory?: DestinationCategory | undefined;

  /**
   * The VPC ID for a top contributor network flow for the remote resource.
   *
   * @public
   */
  remoteVpcId?: string | undefined;

  /**
   * The Amazon Web Services Region for the remote resource for a top contributor network flow.
   *
   * @public
   */
  remoteRegion?: string | undefined;

  /**
   * The Availability Zone for the remote resource for a top contributor network flow.
   *
   * @public
   */
  remoteAz?: string | undefined;

  /**
   * The subnet ID for the remote resource for a top contributor network flow.
   *
   * @public
   */
  remoteSubnetId?: string | undefined;

  /**
   * The instance identifier for the remote resource for a top contributor network flow.
   *
   * @public
   */
  remoteInstanceId?: string | undefined;

  /**
   * The IP address of the remote resource for a top contributor network flow.
   *
   * @public
   */
  remoteIp?: string | undefined;

  /**
   * The destination network address translation (DNAT) IP address for a top contributor network flow.
   *
   * @public
   */
  dnatIp?: string | undefined;

  /**
   * The value of the metric for a top contributor network flow.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * The constructs traversed by a network flow.
   *
   * @public
   */
  traversedConstructs?: TraversedComponent[] | undefined;

  /**
   * Meta data about Kubernetes resources.
   *
   * @public
   */
  kubernetesMetadata?: KubernetesMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of a local resource.
   *
   * @public
   */
  localInstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a local subnet.
   *
   * @public
   */
  localSubnetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a local VPC.
   *
   * @public
   */
  localVpcArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a remote resource.
   *
   * @public
   */
  remoteInstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a remote subnet.
   *
   * @public
   */
  remoteSubnetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a remote VPC.
   *
   * @public
   */
  remoteVpcArn?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsMonitorTopContributorsOutput {
  /**
   * The units for a metric returned by the query.
   *
   * @public
   */
  unit?: MetricUnit | undefined;

  /**
   * The top contributor network flows overall for a specific metric type, for example, the number of retransmissions.
   *
   * @public
   */
  topContributors?: MonitorTopContributorsRow[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A row for a top contributor for a scope.
 *
 * @public
 */
export interface WorkloadInsightsTopContributorsRow {
  /**
   * The account ID for a specific row of data.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The subnet identifier for the local resource.
   *
   * @public
   */
  localSubnetId?: string | undefined;

  /**
   * The identifier for the Availability Zone where the local resource is located.
   *
   * @public
   */
  localAz?: string | undefined;

  /**
   * The identifier for the VPC for the local resource.
   *
   * @public
   */
  localVpcId?: string | undefined;

  /**
   * The Amazon Web Services Region where the local resource is located.
   *
   * @public
   */
  localRegion?: string | undefined;

  /**
   * The identifier of a remote resource. For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN. For an Availability Zone, this identifier is the AZ name, for example, us-west-2b. For an Amazon Web Services Region , this identifier is the Region name, for example, us-west-2.
   *
   * @public
   */
  remoteIdentifier?: string | undefined;

  /**
   * The value for a metric.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of a local subnet.
   *
   * @public
   */
  localSubnetArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a local VPC.
   *
   * @public
   */
  localVpcArn?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsOutput {
  /**
   * The top contributor network flows overall for a specific metric type, for example, the number of retransmissions.
   *
   * @public
   */
  topContributors?: WorkloadInsightsTopContributorsRow[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsDataInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A data point for a top contributor network flow in a scope. Network Flow Monitor returns information about the network flows with the top values for each metric type, which are called top contributors.
 *
 * @public
 */
export interface WorkloadInsightsTopContributorsDataPoint {
  /**
   * An array of the timestamps for the data point.
   *
   * @public
   */
  timestamps: Date[] | undefined;

  /**
   * The values for the data point.
   *
   * @public
   */
  values: number[] | undefined;

  /**
   * The label identifying the data point.
   *
   * @public
   */
  label: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsDataOutput {
  /**
   * The units for a metric returned by the query.
   *
   * @public
   */
  unit: MetricUnit | undefined;

  /**
   * The datapoints returned by the query.
   *
   * @public
   */
  datapoints: WorkloadInsightsTopContributorsDataPoint[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusMonitorTopContributorsInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusMonitorTopContributorsOutput {
  /**
   * When you run a query, use this call to check the status of the query to make sure that the query has `SUCCEEDED` before you review the results.
   *
   * - `QUEUED`: The query is scheduled to run.
   * - `RUNNING`: The query is in progress but not complete.
   * - `SUCCEEDED`: The query completed sucessfully.
   * - `FAILED`: The query failed due to an error.
   * - `CANCELED`: The query was canceled.
   *
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsOutput {
  /**
   * When you run a query, use this call to check the status of the query to make sure that the query has `SUCCEEDED` before you review the results.
   *
   * - `QUEUED`: The query is scheduled to run.
   * - `RUNNING`: The query is in progress but not complete.
   * - `SUCCEEDED`: The query completed sucessfully.
   * - `FAILED`: The query failed due to an error.
   * - `CANCELED`: The query was canceled.
   *
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsDataInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a `CreateScope` API call.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsDataOutput {
  /**
   * The status of a query for top contributors data.
   *
   * - `QUEUED`: The query is scheduled to run.
   * - `RUNNING`: The query is in progress but not complete.
   * - `SUCCEEDED`: The query completed sucessfully.
   * - `FAILED`: The query failed due to an error.
   * - `CANCELED`: The query was canceled.
   *
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface GetScopeInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a `CreateScope` API call.
   *
   * @public
   */
  scopeId: string | undefined;
}

/**
 * @public
 */
export interface GetScopeOutput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a `CreateScope` API call.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The status for a scope. The status can be one of the following: `SUCCEEDED`, `IN_PROGRESS`, `FAILED`, `DEACTIVATING`, or `DEACTIVATED`.
   *
   * A status of `DEACTIVATING` means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of `DEACTIVATED` means that the deactivating process is complete.
   *
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The targets to define the scope to be monitored. A target is an array of targetResources, which are currently Region-account pairs, defined by targetResource constructs.
   *
   * @public
   */
  targets: TargetResource[] | undefined;

  /**
   * The tags for a scope.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status of a monitor. The status can be one of the following
   *
   * - `PENDING`: The monitor is in the process of being created.
   * - `ACTIVE`: The monitor is active.
   * - `INACTIVE`: The monitor is inactive.
   * - `ERROR`: Monitor creation failed due to an error.
   * - `DELETING`: The monitor is in the process of being deleted.
   *
   * @public
   */
  monitorStatus?: MonitorStatus | undefined;
}

/**
 * A summary of information about a monitor, including the ARN, the name, and the status.
 *
 * @public
 */
export interface MonitorSummary {
  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The status of a monitor. The status can be one of the following
   *
   * - `PENDING`: The monitor is in the process of being created.
   * - `ACTIVE`: The monitor is active.
   * - `INACTIVE`: The monitor is inactive.
   * - `ERROR`: Monitor creation failed due to an error.
   * - `DELETING`: The monitor is in the process of being deleted.
   *
   * @public
   */
  monitorStatus: MonitorStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * The monitors that are in an account.
   *
   * @public
   */
  monitors: MonitorSummary[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScopesInput {
  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number of query results that you want to return with this call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of information about a scope, including the ARN, target ID, and Amazon Web Services Region.
 *
 * @public
 */
export interface ScopeSummary {
  /**
   * The identifier for the scope that includes the resources that you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for the accounts in a scope.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The status for a scope. The status can be one of the following: `SUCCEEDED`, `IN_PROGRESS`, `FAILED`, `DEACTIVATING`, or `DEACTIVATED`.
   *
   * A status of `DEACTIVATING` means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of `DEACTIVATED` means that the deactivating process is complete.
   *
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;
}

/**
 * @public
 */
export interface ListScopesOutput {
  /**
   * The scopes returned by the call.
   *
   * @public
   */
  scopes: ScopeSummary[] | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
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
export interface ListTagsForResourceOutput {
  /**
   * The tags for a resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartQueryMonitorTopContributorsInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The timestamp that is the date and time that is the beginning of the period that you want to retrieve results for with your query.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp that is the date and time end of the period that you want to retrieve results for with your query.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The metric that you want to query top contributors for. That is, you can specify a metric with this call and return the top contributor network flows, for that type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones.
   *
   * @public
   */
  metricName: MonitorMetric | undefined;

  /**
   * The category that you want to query top contributors for, for a specific monitor. Destination categories can be one of the following:
   *
   * - `INTRA_AZ`: Top contributor network flows within a single Availability Zone
   * - `INTER_AZ`: Top contributor network flows between Availability Zones
   * - `INTER_REGION`: Top contributor network flows between Regions (to the edge of another Region)
   * - `INTER_VPC`: Top contributor network flows between VPCs
   * - `AMAZON_S3`: Top contributor network flows to or from Amazon S3
   * - `AMAZON_DYNAMODB`: Top contributor network flows to or from Amazon Dynamo DB
   * - `UNCLASSIFIED`: Top contributor network flows that do not have a bucket classification
   *
   * @public
   */
  destinationCategory: DestinationCategory | undefined;

  /**
   * The maximum number of top contributors to return.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface StartQueryMonitorTopContributorsOutput {
  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryMonitorTopContributorsInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryMonitorTopContributorsOutput {}

/**
 * @public
 */
export interface UpdateMonitorInput {
  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * Additional local resources to specify network flows for a monitor, as an array of resources with identifiers and types. A local resource in a workload is the location of hosts where the Network Flow Monitor agent is installed.
   *
   * @public
   */
  localResourcesToAdd?: MonitorLocalResource[] | undefined;

  /**
   * The local resources to remove, as an array of resources with identifiers and types.
   *
   * @public
   */
  localResourcesToRemove?: MonitorLocalResource[] | undefined;

  /**
   * The remote resources to add, as an array of resources with identifiers and types.
   *
   * A remote resource is the other endpoint in the flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.
   *
   * @public
   */
  remoteResourcesToAdd?: MonitorRemoteResource[] | undefined;

  /**
   * The remote resources to remove, as an array of resources with identifiers and types.
   *
   * A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.
   *
   * @public
   */
  remoteResourcesToRemove?: MonitorRemoteResource[] | undefined;

  /**
   * A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * The Amazon Resource Name (ARN) of the monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The status of a monitor. The status can be one of the following
   *
   * - `PENDING`: The monitor is in the process of being created.
   * - `ACTIVE`: The monitor is active.
   * - `INACTIVE`: The monitor is inactive.
   * - `ERROR`: Monitor creation failed due to an error.
   * - `DELETING`: The monitor is in the process of being deleted.
   *
   * @public
   */
  monitorStatus: MonitorStatus | undefined;

  /**
   * The local resources to monitor. A local resource in a workload is the location of hosts where the Network Flow Monitor agent is installed.
   *
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * The remote resources updated for a monitor, as an array of resources with identifiers and types.
   *
   * A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.
   *
   * @public
   */
  remoteResources: MonitorRemoteResource[] | undefined;

  /**
   * The date and time when the monitor was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The last date and time that the monitor was modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The tags for a monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a `CreateScope` API call.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The timestamp that is the date and time that is the beginning of the period that you want to retrieve results for with your query.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp that is the date and time end of the period that you want to retrieve results for with your query.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones.
   *
   * @public
   */
  metricName: WorkloadInsightsMetric | undefined;

  /**
   * The destination category for a top contributors row. Destination categories can be one of the following:
   *
   * - `INTRA_AZ`: Top contributor network flows within a single Availability Zone
   * - `INTER_AZ`: Top contributor network flows between Availability Zones
   * - `INTER_REGION`: Top contributor network flows between Regions (to the edge of another Region)
   * - `INTER_VPC`: Top contributor network flows between VPCs
   * - `AWS_SERVICES`: Top contributor network flows to or from Amazon Web Services services
   * - `UNCLASSIFIED`: Top contributor network flows that do not have a bucket classification
   *
   * @public
   */
  destinationCategory: DestinationCategory | undefined;

  /**
   * The maximum number of top contributors to return.
   *
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsOutput {
  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsDataInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The timestamp that is the date and time that is the beginning of the period that you want to retrieve results for with your query.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp that is the date and time end of the period that you want to retrieve results for with your query.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones.
   *
   * @public
   */
  metricName: WorkloadInsightsMetric | undefined;

  /**
   * The destination category for a top contributors. Destination categories can be one of the following:
   *
   * - `INTRA_AZ`: Top contributor network flows within a single Availability Zone
   * - `INTER_AZ`: Top contributor network flows between Availability Zones
   * - `INTER_REGION`: Top contributor network flows between Regions (to the edge of another Region)
   * - `INTER_VPC`: Top contributor network flows between VPCs
   * - `AWS_SERVICES`: Top contributor network flows to or from Amazon Web Services services
   * - `UNCLASSIFIED`: Top contributor network flows that do not have a bucket classification
   *
   * @public
   */
  destinationCategory: DestinationCategory | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsDataOutput {
  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryWorkloadInsightsTopContributorsInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryWorkloadInsightsTopContributorsOutput {}

/**
 * @public
 */
export interface StopQueryWorkloadInsightsTopContributorsDataInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryWorkloadInsightsTopContributorsDataOutput {}

/**
 * @public
 */
export interface UpdateScopeInput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * A list of resources to add to a scope.
   *
   * @public
   */
  resourcesToAdd?: TargetResource[] | undefined;

  /**
   * A list of resources to delete from a scope.
   *
   * @public
   */
  resourcesToDelete?: TargetResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateScopeOutput {
  /**
   * The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.
   *
   * @public
   */
  scopeId: string | undefined;

  /**
   * The status for a scope. The status can be one of the following: `SUCCEEDED`, `IN_PROGRESS`, `FAILED`, `DEACTIVATING`, or `DEACTIVATED`.
   *
   * A status of `DEACTIVATING` means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of `DEACTIVATED` means that the deactivating process is complete.
   *
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scope.
   *
   * @public
   */
  scopeArn: string | undefined;

  /**
   * The tags for a scope.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags for a resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Keys that you specified when you tagged a resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
