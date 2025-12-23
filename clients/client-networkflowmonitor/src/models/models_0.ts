// smithy-typescript generated code
import {
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
 * <p>A local resource is the host where the agent is installed. Local resources can be a a subnet, a VPC, an Availability Zone, an EKS cluster or an Amazon Web Services Region.</p>
 * @public
 */
export interface MonitorLocalResource {
  /**
   * <p>The type of the local resource. Valid values are <code>AWS::EC2::VPC</code> <code>AWS::AvailabilityZone</code>, <code>AWS::EC2::Subnet</code>, <code>AWS::EKS::Cluster</code>, or <code>AWS::Region</code>.</p>
   * @public
   */
  type: MonitorLocalResourceType | undefined;

  /**
   * <p>The identifier of the local resource. The values you can specify are the following:</p> <ul> <li> <p>For a VPC, subnet or EKS cluster, this identifier is the VPC Amazon Resource Name (ARN), subnet ARN or cluster ARN.</p> </li> <li> <p>For an Availability Zone, this identifier is the AZ name, for example, us-west-2b.</p> </li> <li> <p>For a Region, this identifier is the Region name, for example, us-west-2.</p> </li> </ul>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>A remote resource is the other endpoint in a network flow. That is, one endpoint is the local resource and the other is the remote resource. The values you can specify are the following:</p> <ul> <li> <p>For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN.</p> </li> <li> <p>For a service, this identifier is one of the following strings: <code>S3</code> or <code>DynamoDB</code>.</p> </li> <li> <p>For an Availability Zone, this identifier is the AZ name, for example, us-west-2b.</p> </li> <li> <p>For a Region, this identifier is the Region name, for example, us-west-2.</p> </li> </ul> <p>When a remote resource is an Amazon Web Services Region, Network Flow Monitor provides network performance measurements up to the edge of the Region that you specify.</p>
 * @public
 */
export interface MonitorRemoteResource {
  /**
   * <p>The type of the remote resource. Valid values are <code>AWS::EC2::VPC</code> <code>AWS::AvailabilityZone</code>, <code>AWS::EC2::Subnet</code>, <code>AWS::AWSService</code>, or <code>AWS::Region</code>.</p>
   * @public
   */
  type: MonitorRemoteResourceType | undefined;

  /**
   * <p>The identifier of the remote resource. For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN. For an Availability Zone, this identifier is the AZ name, for example, us-west-2b. For an Amazon Web Services Region , this identifier is the Region name, for example, us-west-2. </p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * <p>The name of the monitor. </p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The local resources to monitor. A local resource in a workload is the location of the host, or hosts, where the Network Flow Monitor agent is installed. For example, if a workload consists of an interaction between a web service and a backend database (for example, Amazon Dynamo DB), the subnet with the EC2 instance that hosts the web service, which also runs the agent, is the local resource.</p> <p>Be aware that all local resources must belong to the current Region.</p>
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * <p>The remote resources to monitor. A remote resource is the other endpoint in the bi-directional flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.</p> <p>When you specify remote resources, be aware that specific combinations of resources are allowed and others are not, including the following constraints:</p> <ul> <li> <p>All remote resources that you specify must all belong to a single Region.</p> </li> <li> <p>If you specify Amazon Web Services services as remote resources, any other remote resources that you specify must be in the current Region.</p> </li> <li> <p>When you specify a remote resource for another Region, you can only specify the <code>Region</code> resource type. You cannot specify a subnet, VPC, or Availability Zone in another Region.</p> </li> <li> <p>If you leave the <code>RemoteResources</code> parameter empty, the monitor will include all network flows that terminate in the current Region.</p> </li> </ul>
   * @public
   */
  remoteResources?: MonitorRemoteResource[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope for the monitor.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for a monitor. You can add a maximum of 200 tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor. </p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The status of a monitor. The status can be one of the following</p> <ul> <li> <p> <code>PENDING</code>: The monitor is in the process of being created.</p> </li> <li> <p> <code>ACTIVE</code>: The monitor is active.</p> </li> <li> <p> <code>INACTIVE</code>: The monitor is inactive.</p> </li> <li> <p> <code>ERROR</code>: Monitor creation failed due to an error.</p> </li> <li> <p> <code>DELETING</code>: The monitor is in the process of being deleted.</p> </li> </ul>
   * @public
   */
  monitorStatus: MonitorStatus | undefined;

  /**
   * <p>The local resources to monitor. A local resource in a workload is the location of hosts where the Network Flow Monitor agent is installed. </p>
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * <p>The remote resources to monitor. A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource. </p>
   * @public
   */
  remoteResources: MonitorRemoteResource[] | undefined;

  /**
   * <p>The date and time when the monitor was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The last date and time that the monitor was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The tags for a monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A target ID is an internally-generated identifier for a target. A target allows you to identify all the resources in a Network Flow Monitor scope. Currently, a target is always an Amazon Web Services account.</p>
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
   * <p>The identifier for the account for a target.</p>
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
 * <p>A target identifier is a pair of identifying information for a scope that is included in a target. A target identifier is made up of a target ID and a target type. Currently the target ID is always an account ID and the target type is always ACCOUNT.</p>
 * @public
 */
export interface TargetIdentifier {
  /**
   * <p>The identifier for a target, which is currently always an account ID .</p>
   * @public
   */
  targetId: TargetId | undefined;

  /**
   * <p>The type of a target. A target type is currently always <code>ACCOUNT</code>.</p>
   * @public
   */
  targetType: TargetType | undefined;
}

/**
 * <p>A target resource in a scope. The resource is identified by a Region and an account, defined by a target identifier. A target identifier is made up of a target ID (currently always an account ID) and a target type (currently always <code>ACCOUNT</code>).</p>
 * @public
 */
export interface TargetResource {
  /**
   * <p>A target identifier is a pair of identifying information for a scope. A target identifier is made up of a targetID (currently always an account ID) and a targetType (currently always an account).</p>
   * @public
   */
  targetIdentifier: TargetIdentifier | undefined;

  /**
   * <p>The Amazon Web Services Region for the scope.</p>
   * @public
   */
  region: string | undefined;
}

/**
 * @public
 */
export interface CreateScopeInput {
  /**
   * <p>The targets to define the scope to be monitored. A target is an array of targetResources, which are currently Region-account pairs, defined by targetResource constructs.</p>
   * @public
   */
  targets: TargetResource[] | undefined;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for a scope. You can add a maximum of 200 tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateScopeOutput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get metrics for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The status for a scope. The status can be one of the following: <code>SUCCEEDED</code>, <code>IN_PROGRESS</code>, <code>FAILED</code>, <code>DEACTIVATING</code>, or <code>DEACTIVATED</code>.</p> <p>A status of <code>DEACTIVATING</code> means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of <code>DEACTIVATED</code> means that the deactivating process is complete.</p>
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The tags for a scope.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * <p>The name of the monitor to delete.</p>
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
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
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
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;
}

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The status of a monitor. The status can be one of the following</p> <ul> <li> <p> <code>PENDING</code>: The monitor is in the process of being created.</p> </li> <li> <p> <code>ACTIVE</code>: The monitor is active.</p> </li> <li> <p> <code>INACTIVE</code>: The monitor is inactive.</p> </li> <li> <p> <code>ERROR</code>: Monitor creation failed due to an error.</p> </li> <li> <p> <code>DELETING</code>: The monitor is in the process of being deleted.</p> </li> </ul>
   * @public
   */
  monitorStatus: MonitorStatus | undefined;

  /**
   * <p>The local resources to monitor. A local resource in a workload is the location of the hosts where the Network Flow Monitor agent is installed. </p>
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * <p>The remote resources to monitor. A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource. </p>
   * @public
   */
  remoteResources: MonitorRemoteResource[] | undefined;

  /**
   * <p>The date and time when the monitor was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the monitor was last modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The tags for a monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsMonitorTopContributorsInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Meta data about Kubernetes resources.</p>
 * @public
 */
export interface KubernetesMetadata {
  /**
   * <p>The service name for a local resource.</p>
   * @public
   */
  localServiceName?: string | undefined;

  /**
   * <p>The name of the pod for a local resource.</p>
   * @public
   */
  localPodName?: string | undefined;

  /**
   * <p>The namespace of the pod for a local resource.</p>
   * @public
   */
  localPodNamespace?: string | undefined;

  /**
   * <p>The service name for a remote resource.</p>
   * @public
   */
  remoteServiceName?: string | undefined;

  /**
   * <p>The name of the pod for a remote resource.</p>
   * @public
   */
  remotePodName?: string | undefined;

  /**
   * <p>The namespace of the pod for a remote resource.</p>
   * @public
   */
  remotePodNamespace?: string | undefined;
}

/**
 * <p>A section of the network that a network flow has traveled through.</p>
 * @public
 */
export interface TraversedComponent {
  /**
   * <p>The identifier for the traversed component.</p>
   * @public
   */
  componentId?: string | undefined;

  /**
   * <p>The type of component that was traversed.</p>
   * @public
   */
  componentType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a traversed component.</p>
   * @public
   */
  componentArn?: string | undefined;

  /**
   * <p>The service name for the traversed component.</p>
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * <p>A set of information for a top contributor network flow in a monitor. In a monitor, Network Flow Monitor returns information about the network flows for top contributors for each metric. Top contributors are network flows with the top values for each metric type.</p>
 * @public
 */
export interface MonitorTopContributorsRow {
  /**
   * <p>The IP address of the local resource for a top contributor network flow.</p>
   * @public
   */
  localIp?: string | undefined;

  /**
   * <p>The secure network address translation (SNAT) IP address for a top contributor network flow.</p>
   * @public
   */
  snatIp?: string | undefined;

  /**
   * <p>The instance identifier for the local resource for a top contributor network flow.</p>
   * @public
   */
  localInstanceId?: string | undefined;

  /**
   * <p>The VPC ID for a top contributor network flow for the local resource.</p>
   * @public
   */
  localVpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the local resource for a top contributor network flow.</p>
   * @public
   */
  localRegion?: string | undefined;

  /**
   * <p>The Availability Zone for the local resource for a top contributor network flow.</p>
   * @public
   */
  localAz?: string | undefined;

  /**
   * <p>The subnet ID for the local resource for a top contributor network flow.</p>
   * @public
   */
  localSubnetId?: string | undefined;

  /**
   * <p>The target port.</p>
   * @public
   */
  targetPort?: number | undefined;

  /**
   * <p>The destination category for a top contributors row. Destination categories can be one of the following: </p> <ul> <li> <p> <code>INTRA_AZ</code>: Top contributor network flows within a single Availability Zone</p> </li> <li> <p> <code>INTER_AZ</code>: Top contributor network flows between Availability Zones</p> </li> <li> <p> <code>INTER_REGION</code>: Top contributor network flows between Regions (to the edge of another Region)</p> </li> <li> <p> <code>INTER_VPC</code>: Top contributor network flows between VPCs</p> </li> <li> <p> <code>AWS_SERVICES</code>: Top contributor network flows to or from Amazon Web Services services</p> </li> <li> <p> <code>UNCLASSIFIED</code>: Top contributor network flows that do not have a bucket classification</p> </li> </ul>
   * @public
   */
  destinationCategory?: DestinationCategory | undefined;

  /**
   * <p>The VPC ID for a top contributor network flow for the remote resource.</p>
   * @public
   */
  remoteVpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region for the remote resource for a top contributor network flow.</p>
   * @public
   */
  remoteRegion?: string | undefined;

  /**
   * <p>The Availability Zone for the remote resource for a top contributor network flow.</p>
   * @public
   */
  remoteAz?: string | undefined;

  /**
   * <p>The subnet ID for the remote resource for a top contributor network flow.</p>
   * @public
   */
  remoteSubnetId?: string | undefined;

  /**
   * <p>The instance identifier for the remote resource for a top contributor network flow.</p>
   * @public
   */
  remoteInstanceId?: string | undefined;

  /**
   * <p>The IP address of the remote resource for a top contributor network flow.</p>
   * @public
   */
  remoteIp?: string | undefined;

  /**
   * <p>The destination network address translation (DNAT) IP address for a top contributor network flow.</p>
   * @public
   */
  dnatIp?: string | undefined;

  /**
   * <p>The value of the metric for a top contributor network flow.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>The constructs traversed by a network flow.</p>
   * @public
   */
  traversedConstructs?: TraversedComponent[] | undefined;

  /**
   * <p>Meta data about Kubernetes resources.</p>
   * @public
   */
  kubernetesMetadata?: KubernetesMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a local resource.</p>
   * @public
   */
  localInstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a local subnet.</p>
   * @public
   */
  localSubnetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a local VPC.</p>
   * @public
   */
  localVpcArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a remote resource.</p>
   * @public
   */
  remoteInstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a remote subnet.</p>
   * @public
   */
  remoteSubnetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a remote VPC.</p>
   * @public
   */
  remoteVpcArn?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsMonitorTopContributorsOutput {
  /**
   * <p>The units for a metric returned by the query.</p>
   * @public
   */
  unit?: MetricUnit | undefined;

  /**
   * <p>The top contributor network flows overall for a specific metric type, for example, the number of retransmissions.</p>
   * @public
   */
  topContributors?: MonitorTopContributorsRow[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A row for a top contributor for a scope.</p>
 * @public
 */
export interface WorkloadInsightsTopContributorsRow {
  /**
   * <p>The account ID for a specific row of data.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The subnet identifier for the local resource.</p>
   * @public
   */
  localSubnetId?: string | undefined;

  /**
   * <p>The identifier for the Availability Zone where the local resource is located.</p>
   * @public
   */
  localAz?: string | undefined;

  /**
   * <p>The identifier for the VPC for the local resource.</p>
   * @public
   */
  localVpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the local resource is located.</p>
   * @public
   */
  localRegion?: string | undefined;

  /**
   * <p>The identifier of a remote resource. For a VPC or subnet, this identifier is the VPC Amazon Resource Name (ARN) or subnet ARN. For an Availability Zone, this identifier is the AZ name, for example, us-west-2b. For an Amazon Web Services Region , this identifier is the Region name, for example, us-west-2.</p>
   * @public
   */
  remoteIdentifier?: string | undefined;

  /**
   * <p>The value for a metric.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a local subnet.</p>
   * @public
   */
  localSubnetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a local VPC.</p>
   * @public
   */
  localVpcArn?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsOutput {
  /**
   * <p>The top contributor network flows overall for a specific metric type, for example, the number of retransmissions.</p>
   * @public
   */
  topContributors?: WorkloadInsightsTopContributorsRow[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsDataInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A data point for a top contributor network flow in a scope. Network Flow Monitor returns information about the network flows with the top values for each metric type, which are called top contributors.</p>
 * @public
 */
export interface WorkloadInsightsTopContributorsDataPoint {
  /**
   * <p>An array of the timestamps for the data point.</p>
   * @public
   */
  timestamps: Date[] | undefined;

  /**
   * <p>The values for the data point.</p>
   * @public
   */
  values: number[] | undefined;

  /**
   * <p>The label identifying the data point.</p>
   * @public
   */
  label: string | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsWorkloadInsightsTopContributorsDataOutput {
  /**
   * <p>The units for a metric returned by the query.</p>
   * @public
   */
  unit: MetricUnit | undefined;

  /**
   * <p>The datapoints returned by the query.</p>
   * @public
   */
  datapoints: WorkloadInsightsTopContributorsDataPoint[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusMonitorTopContributorsInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusMonitorTopContributorsOutput {
  /**
   * <p>When you run a query, use this call to check the status of the query to make sure that the query has <code>SUCCEEDED</code> before you review the results.</p> <ul> <li> <p> <code>QUEUED</code>: The query is scheduled to run.</p> </li> <li> <p> <code>RUNNING</code>: The query is in progress but not complete.</p> </li> <li> <p> <code>SUCCEEDED</code>: The query completed sucessfully.</p> </li> <li> <p> <code>FAILED</code>: The query failed due to an error.</p> </li> <li> <p> <code>CANCELED</code>: The query was canceled.</p> </li> </ul>
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsOutput {
  /**
   * <p>When you run a query, use this call to check the status of the query to make sure that the query has <code>SUCCEEDED</code> before you review the results.</p> <ul> <li> <p> <code>QUEUED</code>: The query is scheduled to run.</p> </li> <li> <p> <code>RUNNING</code>: The query is in progress but not complete.</p> </li> <li> <p> <code>SUCCEEDED</code>: The query completed sucessfully.</p> </li> <li> <p> <code>FAILED</code>: The query failed due to an error.</p> </li> <li> <p> <code>CANCELED</code>: The query was canceled.</p> </li> </ul>
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsDataInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a <code>CreateScope</code> API call.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetQueryStatusWorkloadInsightsTopContributorsDataOutput {
  /**
   * <p>The status of a query for top contributors data.</p> <ul> <li> <p> <code>QUEUED</code>: The query is scheduled to run.</p> </li> <li> <p> <code>RUNNING</code>: The query is in progress but not complete.</p> </li> <li> <p> <code>SUCCEEDED</code>: The query completed sucessfully.</p> </li> <li> <p> <code>FAILED</code>: The query failed due to an error.</p> </li> <li> <p> <code>CANCELED</code>: The query was canceled.</p> </li> </ul>
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface GetScopeInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a <code>CreateScope</code> API call.</p>
   * @public
   */
  scopeId: string | undefined;
}

/**
 * @public
 */
export interface GetScopeOutput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a <code>CreateScope</code> API call.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The status for a scope. The status can be one of the following: <code>SUCCEEDED</code>, <code>IN_PROGRESS</code>, <code>FAILED</code>, <code>DEACTIVATING</code>, or <code>DEACTIVATED</code>.</p> <p>A status of <code>DEACTIVATING</code> means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of <code>DEACTIVATED</code> means that the deactivating process is complete.</p>
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The targets to define the scope to be monitored. A target is an array of targetResources, which are currently Region-account pairs, defined by targetResource constructs.</p>
   * @public
   */
  targets: TargetResource[] | undefined;

  /**
   * <p>The tags for a scope.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The status of a monitor. The status can be one of the following</p> <ul> <li> <p> <code>PENDING</code>: The monitor is in the process of being created.</p> </li> <li> <p> <code>ACTIVE</code>: The monitor is active.</p> </li> <li> <p> <code>INACTIVE</code>: The monitor is inactive.</p> </li> <li> <p> <code>ERROR</code>: Monitor creation failed due to an error.</p> </li> <li> <p> <code>DELETING</code>: The monitor is in the process of being deleted.</p> </li> </ul>
   * @public
   */
  monitorStatus?: MonitorStatus | undefined;
}

/**
 * <p>A summary of information about a monitor, including the ARN, the name, and the status.</p>
 * @public
 */
export interface MonitorSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The status of a monitor. The status can be one of the following</p> <ul> <li> <p> <code>PENDING</code>: The monitor is in the process of being created.</p> </li> <li> <p> <code>ACTIVE</code>: The monitor is active.</p> </li> <li> <p> <code>INACTIVE</code>: The monitor is inactive.</p> </li> <li> <p> <code>ERROR</code>: Monitor creation failed due to an error.</p> </li> <li> <p> <code>DELETING</code>: The monitor is in the process of being deleted.</p> </li> </ul>
   * @public
   */
  monitorStatus: MonitorStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * <p>The monitors that are in an account.</p>
   * @public
   */
  monitors: MonitorSummary[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScopesInput {
  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number of query results that you want to return with this call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of information about a scope, including the ARN, target ID, and Amazon Web Services Region.</p>
 * @public
 */
export interface ScopeSummary {
  /**
   * <p>The identifier for the scope that includes the resources that you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for the accounts in a scope.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The status for a scope. The status can be one of the following: <code>SUCCEEDED</code>, <code>IN_PROGRESS</code>, <code>FAILED</code>, <code>DEACTIVATING</code>, or <code>DEACTIVATED</code>.</p> <p>A status of <code>DEACTIVATING</code> means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of <code>DEACTIVATED</code> means that the deactivating process is complete.</p>
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;
}

/**
 * @public
 */
export interface ListScopesOutput {
  /**
   * <p>The scopes returned by the call.</p>
   * @public
   */
  scopes: ScopeSummary[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags for a resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartQueryMonitorTopContributorsInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The timestamp that is the date and time that is the beginning of the period that you want to retrieve results for with your query.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp that is the date and time end of the period that you want to retrieve results for with your query.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The metric that you want to query top contributors for. That is, you can specify a metric with this call and return the top contributor network flows, for that type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones.</p>
   * @public
   */
  metricName: MonitorMetric | undefined;

  /**
   * <p>The category that you want to query top contributors for, for a specific monitor. Destination categories can be one of the following: </p> <ul> <li> <p> <code>INTRA_AZ</code>: Top contributor network flows within a single Availability Zone</p> </li> <li> <p> <code>INTER_AZ</code>: Top contributor network flows between Availability Zones</p> </li> <li> <p> <code>INTER_REGION</code>: Top contributor network flows between Regions (to the edge of another Region)</p> </li> <li> <p> <code>INTER_VPC</code>: Top contributor network flows between VPCs</p> </li> <li> <p> <code>AMAZON_S3</code>: Top contributor network flows to or from Amazon S3</p> </li> <li> <p> <code>AMAZON_DYNAMODB</code>: Top contributor network flows to or from Amazon Dynamo DB</p> </li> <li> <p> <code>UNCLASSIFIED</code>: Top contributor network flows that do not have a bucket classification</p> </li> </ul>
   * @public
   */
  destinationCategory: DestinationCategory | undefined;

  /**
   * <p>The maximum number of top contributors to return.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface StartQueryMonitorTopContributorsOutput {
  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryMonitorTopContributorsInput {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</p>
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
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>Additional local resources to specify network flows for a monitor, as an array of resources with identifiers and types. A local resource in a workload is the location of hosts where the Network Flow Monitor agent is installed. </p>
   * @public
   */
  localResourcesToAdd?: MonitorLocalResource[] | undefined;

  /**
   * <p>The local resources to remove, as an array of resources with identifiers and types.</p>
   * @public
   */
  localResourcesToRemove?: MonitorLocalResource[] | undefined;

  /**
   * <p>The remote resources to add, as an array of resources with identifiers and types.</p> <p>A remote resource is the other endpoint in the flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource. </p>
   * @public
   */
  remoteResourcesToAdd?: MonitorRemoteResource[] | undefined;

  /**
   * <p>The remote resources to remove, as an array of resources with identifiers and types.</p> <p>A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource. </p>
   * @public
   */
  remoteResourcesToRemove?: MonitorRemoteResource[] | undefined;

  /**
   * <p>A unique, case-sensitive string of up to 64 ASCII characters that you specify to make an idempotent API request. Don't reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The status of a monitor. The status can be one of the following</p> <ul> <li> <p> <code>PENDING</code>: The monitor is in the process of being created.</p> </li> <li> <p> <code>ACTIVE</code>: The monitor is active.</p> </li> <li> <p> <code>INACTIVE</code>: The monitor is inactive.</p> </li> <li> <p> <code>ERROR</code>: Monitor creation failed due to an error.</p> </li> <li> <p> <code>DELETING</code>: The monitor is in the process of being deleted.</p> </li> </ul>
   * @public
   */
  monitorStatus: MonitorStatus | undefined;

  /**
   * <p>The local resources to monitor. A local resource in a workload is the location of hosts where the Network Flow Monitor agent is installed. </p>
   * @public
   */
  localResources: MonitorLocalResource[] | undefined;

  /**
   * <p>The remote resources updated for a monitor, as an array of resources with identifiers and types.</p> <p>A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.</p>
   * @public
   */
  remoteResources: MonitorRemoteResource[] | undefined;

  /**
   * <p>The date and time when the monitor was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The last date and time that the monitor was modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The tags for a monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a <code>CreateScope</code> API call.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The timestamp that is the date and time that is the beginning of the period that you want to retrieve results for with your query.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp that is the date and time end of the period that you want to retrieve results for with your query.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones.</p>
   * @public
   */
  metricName: WorkloadInsightsMetric | undefined;

  /**
   * <p>The destination category for a top contributors row. Destination categories can be one of the following: </p> <ul> <li> <p> <code>INTRA_AZ</code>: Top contributor network flows within a single Availability Zone</p> </li> <li> <p> <code>INTER_AZ</code>: Top contributor network flows between Availability Zones</p> </li> <li> <p> <code>INTER_REGION</code>: Top contributor network flows between Regions (to the edge of another Region)</p> </li> <li> <p> <code>INTER_VPC</code>: Top contributor network flows between VPCs</p> </li> <li> <p> <code>AWS_SERVICES</code>: Top contributor network flows to or from Amazon Web Services services</p> </li> <li> <p> <code>UNCLASSIFIED</code>: Top contributor network flows that do not have a bucket classification</p> </li> </ul>
   * @public
   */
  destinationCategory: DestinationCategory | undefined;

  /**
   * <p>The maximum number of top contributors to return.</p>
   * @public
   */
  limit?: number | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsOutput {
  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsDataInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The timestamp that is the date and time that is the beginning of the period that you want to retrieve results for with your query.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp that is the date and time end of the period that you want to retrieve results for with your query.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The metric that you want to query top contributors for. That is, you can specify this metric to return the top contributor network flows, for this type of metric, for a monitor and (optionally) within a specific category, such as network flows between Availability Zones.</p>
   * @public
   */
  metricName: WorkloadInsightsMetric | undefined;

  /**
   * <p>The destination category for a top contributors. Destination categories can be one of the following: </p> <ul> <li> <p> <code>INTRA_AZ</code>: Top contributor network flows within a single Availability Zone</p> </li> <li> <p> <code>INTER_AZ</code>: Top contributor network flows between Availability Zones</p> </li> <li> <p> <code>INTER_REGION</code>: Top contributor network flows between Regions (to the edge of another Region)</p> </li> <li> <p> <code>INTER_VPC</code>: Top contributor network flows between VPCs</p> </li> <li> <p> <code>AWS_SERVICES</code>: Top contributor network flows to or from Amazon Web Services services</p> </li> <li> <p> <code>UNCLASSIFIED</code>: Top contributor network flows that do not have a bucket classification</p> </li> </ul>
   * @public
   */
  destinationCategory: DestinationCategory | undefined;
}

/**
 * @public
 */
export interface StartQueryWorkloadInsightsTopContributorsDataOutput {
  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface StopQueryWorkloadInsightsTopContributorsInput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</p>
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
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</p>
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
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>A list of resources to add to a scope.</p>
   * @public
   */
  resourcesToAdd?: TargetResource[] | undefined;

  /**
   * <p>A list of resources to delete from a scope.</p>
   * @public
   */
  resourcesToDelete?: TargetResource[] | undefined;
}

/**
 * @public
 */
export interface UpdateScopeOutput {
  /**
   * <p>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</p>
   * @public
   */
  scopeId: string | undefined;

  /**
   * <p>The status for a scope. The status can be one of the following: <code>SUCCEEDED</code>, <code>IN_PROGRESS</code>, <code>FAILED</code>, <code>DEACTIVATING</code>, or <code>DEACTIVATED</code>.</p> <p>A status of <code>DEACTIVATING</code> means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of <code>DEACTIVATED</code> means that the deactivating process is complete.</p>
   * @public
   */
  status: ScopeStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scope.</p>
   * @public
   */
  scopeArn: string | undefined;

  /**
   * <p>The tags for a scope.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags for a resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Keys that you specified when you tagged a resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
