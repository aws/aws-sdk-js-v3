import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AgentParameterField {
  /**
   * Maximum stack depth to be captured by the CodeGuru Profiler.
   */
  MAX_STACK_DEPTH = "MaxStackDepth",
  /**
   * Percentage of memory to be used by CodeGuru profiler. Minimum of 30MB is required for the agent.
   */
  MEMORY_USAGE_LIMIT_PERCENT = "MemoryUsageLimitPercent",
  /**
   * Minimum time in milliseconds between sending reports.
   */
  MINIMUM_TIME_FOR_REPORTING_IN_MILLISECONDS = "MinimumTimeForReportingInMilliseconds",
  /**
   * Reporting interval in milliseconds used to report profiles.
   */
  REPORTING_INTERVAL_IN_MILLISECONDS = "ReportingIntervalInMilliseconds",
  /**
   * Sampling interval in milliseconds used to sample profiles.
   */
  SAMPLING_INTERVAL_IN_MILLISECONDS = "SamplingIntervalInMilliseconds"
}

/**
 * <p>Information about the time range of the latest available aggregated profile.</p>
 */
export interface AggregatedProfileTime {
  __type?: "AggregatedProfileTime";
  /**
   * <p>The time period.</p>
   */
  period?: AggregationPeriod | string;

  /**
   * <p>The start time.</p>
   */
  start?: Date;
}

export namespace AggregatedProfileTime {
  export const filterSensitiveLog = (obj: AggregatedProfileTime): any => ({
    ...obj
  });
  export const isa = (o: any): o is AggregatedProfileTime =>
    __isa(o, "AggregatedProfileTime");
}

export enum AggregationPeriod {
  /**
   * Period of one day.
   */
  P1D = "P1D",
  /**
   * Period of one hour.
   */
  PT1H = "PT1H",
  /**
   * Period of five minutes.
   */
  PT5M = "PT5M"
}

export enum ComputePlatform {
  /**
   * Compute platform meant to used for AWS Lambda.
   */
  AWSLAMBDA = "AWSLambda",
  /**
   * Compute platform meant to used for all usecases (like EC2, Fargate, physical servers etc.) but AWS Lambda.
   */
  DEFAULT = "Default"
}

/**
 * <p>The requested operation would cause a conflict with the current state
 *         of a service resource associated with the request. Resolve the conflict
 *         before retrying this request.
 *       </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerException =>
    __isa(o, "InternalServerException");
}

export enum MetricType {
  /**
   * Metric value aggregated for all instances of a frame name in a profile relative to the root frame.
   */
  AGGREGATED_RELATIVE_TOTAL_TIME = "AGGREGATED_RELATIVE_TOTAL_TIME"
}

export enum OrderBy {
  /**
   * Order by timestamp in ascending order.
   */
  TIMESTAMP_ASCENDING = "TimestampAscending",
  /**
   * Order by timestamp in descending order.
   */
  TIMESTAMP_DESCENDING = "TimestampDescending"
}

/**
 * <p>The resource specified in the request does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>You have exceeded your service quota. To perform the requested action,
 *         remove some of the relevant resources, or use <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a> to request a
 *         service quota increase.
 *       </p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  $retryable: {};
  message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (
    obj: ServiceQuotaExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceQuotaExceededException =>
    __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {};
  message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>The parameter is not valid.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}

/**
 * <p/>
 */
export interface AgentConfiguration {
  __type?: "AgentConfiguration";
  agentParameters?: { [key: string]: string };
  /**
   * <p/>
   */
  periodInSeconds: number | undefined;

  /**
   * <p/>
   */
  shouldProfile: boolean | undefined;
}

export namespace AgentConfiguration {
  export const filterSensitiveLog = (obj: AgentConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is AgentConfiguration =>
    __isa(o, "AgentConfiguration");
}

/**
 * <p>The structure representing the configureAgentRequest.</p>
 */
export interface ConfigureAgentRequest {
  __type?: "ConfigureAgentRequest";
  /**
   * <p/>
   */
  fleetInstanceId?: string;

  metadata?: { [key: string]: string };
  /**
   * <p/>
   */
  profilingGroupName: string | undefined;
}

export namespace ConfigureAgentRequest {
  export const filterSensitiveLog = (obj: ConfigureAgentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigureAgentRequest =>
    __isa(o, "ConfigureAgentRequest");
}

/**
 * <p>The structure representing the configureAgentResponse.</p>
 */
export interface ConfigureAgentResponse {
  __type?: "ConfigureAgentResponse";
  /**
   * <p/>
   */
  configuration: AgentConfiguration | undefined;
}

export namespace ConfigureAgentResponse {
  export const filterSensitiveLog = (obj: ConfigureAgentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigureAgentResponse =>
    __isa(o, "ConfigureAgentResponse");
}

export enum MetadataField {
  /**
   * Unique identifier for the agent instance.
   */
  AGENT_ID = "AgentId",
  /**
   * AWS requestId of the Lambda invocation.
   */
  AWS_REQUEST_ID = "AwsRequestId",
  /**
   * Compute platform on which agent is running.
   */
  COMPUTE_PLATFORM = "ComputePlatform",
  /**
   * Execution environment on which Lambda function is running.
   */
  EXECUTION_ENVIRONMENT = "ExecutionEnvironment",
  /**
   * Function ARN that's used to invoke the Lambda function.
   */
  LAMBDA_FUNCTION_ARN = "LambdaFunctionArn",
  /**
   * Memory allocated for the Lambda function.
   */
  LAMBDA_MEMORY_LIMIT_IN_MB = "LambdaMemoryLimitInMB",
  /**
   * Time in milliseconds for the previous Lambda invocation.
   */
  LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS = "LambdaPreviousExecutionTimeInMilliseconds",
  /**
   * Time in milliseconds left before the execution times out.
   */
  LAMBDA_REMAINING_TIME_IN_MILLISECONDS = "LambdaRemainingTimeInMilliseconds",
  /**
   * Time in milliseconds between two invocations of the Lambda function.
   */
  LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS = "LambdaTimeGapBetweenInvokesInMilliseconds"
}

/**
 * <p/>
 */
export interface AgentOrchestrationConfig {
  __type?: "AgentOrchestrationConfig";
  /**
   * <p/>
   */
  profilingEnabled: boolean | undefined;
}

export namespace AgentOrchestrationConfig {
  export const filterSensitiveLog = (obj: AgentOrchestrationConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AgentOrchestrationConfig =>
    __isa(o, "AgentOrchestrationConfig");
}

/**
 * <p>The structure representing the createProfiliingGroupRequest.</p>
 */
export interface CreateProfilingGroupRequest {
  __type?: "CreateProfilingGroupRequest";
  /**
   * <p>The agent orchestration configuration.</p>
   */
  agentOrchestrationConfig?: AgentOrchestrationConfig;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   *          <p>This parameter specifies a unique
   *         identifier for the new profiling group that helps ensure idempotency.</p>
   */
  clientToken?: string;

  computePlatform?: ComputePlatform | string;
  /**
   * <p>The name of the profiling group.</p>
   */
  profilingGroupName: string | undefined;
}

export namespace CreateProfilingGroupRequest {
  export const filterSensitiveLog = (
    obj: CreateProfilingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProfilingGroupRequest =>
    __isa(o, "CreateProfilingGroupRequest");
}

/**
 * <p>The structure representing the createProfilingGroupResponse.</p>
 */
export interface CreateProfilingGroupResponse {
  __type?: "CreateProfilingGroupResponse";
  /**
   * <p>Information about the new profiling group</p>
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

export namespace CreateProfilingGroupResponse {
  export const filterSensitiveLog = (
    obj: CreateProfilingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProfilingGroupResponse =>
    __isa(o, "CreateProfilingGroupResponse");
}

/**
 * <p>The structure representing the deleteProfilingGroupRequest.</p>
 */
export interface DeleteProfilingGroupRequest {
  __type?: "DeleteProfilingGroupRequest";
  /**
   * <p>The profiling group name to delete.</p>
   */
  profilingGroupName: string | undefined;
}

export namespace DeleteProfilingGroupRequest {
  export const filterSensitiveLog = (
    obj: DeleteProfilingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProfilingGroupRequest =>
    __isa(o, "DeleteProfilingGroupRequest");
}

/**
 * <p>The structure representing the deleteProfilingGroupResponse.</p>
 */
export interface DeleteProfilingGroupResponse {
  __type?: "DeleteProfilingGroupResponse";
}

export namespace DeleteProfilingGroupResponse {
  export const filterSensitiveLog = (
    obj: DeleteProfilingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProfilingGroupResponse =>
    __isa(o, "DeleteProfilingGroupResponse");
}

/**
 * <p>The structure representing the describeProfilingGroupRequest.</p>
 */
export interface DescribeProfilingGroupRequest {
  __type?: "DescribeProfilingGroupRequest";
  /**
   * <p>The profiling group name.</p>
   */
  profilingGroupName: string | undefined;
}

export namespace DescribeProfilingGroupRequest {
  export const filterSensitiveLog = (
    obj: DescribeProfilingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProfilingGroupRequest =>
    __isa(o, "DescribeProfilingGroupRequest");
}

/**
 * <p>The structure representing the describeProfilingGroupResponse.</p>
 */
export interface DescribeProfilingGroupResponse {
  __type?: "DescribeProfilingGroupResponse";
  /**
   * <p>Information about a profiling group.</p>
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

export namespace DescribeProfilingGroupResponse {
  export const filterSensitiveLog = (
    obj: DescribeProfilingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProfilingGroupResponse =>
    __isa(o, "DescribeProfilingGroupResponse");
}

/**
 * <p>The structure representing the listProfilingGroupsRequest.</p>
 */
export interface ListProfilingGroupsRequest {
  __type?: "ListProfilingGroupsRequest";
  /**
   * <p>A Boolean value indicating whether to include a description.</p>
   */
  includeDescription?: boolean;

  /**
   * <p>The maximum number of profiling groups results returned by <code>ListProfilingGroups</code>
   *          in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListProfilingGroups</code> request with the returned
   *          <code>nextToken</code> value.
   *       </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListProfilingGroupsRequest {
  export const filterSensitiveLog = (obj: ListProfilingGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProfilingGroupsRequest =>
    __isa(o, "ListProfilingGroupsRequest");
}

/**
 * <p>The structure representing the listProfilingGroupsResponse.</p>
 */
export interface ListProfilingGroupsResponse {
  __type?: "ListProfilingGroupsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListProfilingGroups</code> request.
   *          When the results of a <code>ListProfilingGroups</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>Information about profiling group names.</p>
   */
  profilingGroupNames: string[] | undefined;

  /**
   * <p>Information about profiling groups.</p>
   */
  profilingGroups?: ProfilingGroupDescription[];
}

export namespace ListProfilingGroupsResponse {
  export const filterSensitiveLog = (
    obj: ListProfilingGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProfilingGroupsResponse =>
    __isa(o, "ListProfilingGroupsResponse");
}

/**
 * <p>The description of a profiling group.</p>
 */
export interface ProfilingGroupDescription {
  __type?: "ProfilingGroupDescription";
  /**
   * <p/>
   */
  agentOrchestrationConfig?: AgentOrchestrationConfig;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the profiling group.</p>
   */
  arn?: string;

  computePlatform?: ComputePlatform | string;
  /**
   * <p>The time, in milliseconds since the epoch, when the profiling group was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the profiling group.</p>
   */
  name?: string;

  /**
   * <p>The status of the profiling group.</p>
   */
  profilingStatus?: ProfilingStatus;

  /**
   * <p>The time, in milliseconds since the epoch, when the profiling group was last updated.</p>
   */
  updatedAt?: Date;
}

export namespace ProfilingGroupDescription {
  export const filterSensitiveLog = (obj: ProfilingGroupDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProfilingGroupDescription =>
    __isa(o, "ProfilingGroupDescription");
}

/**
 * <p>Information about the profiling status.</p>
 */
export interface ProfilingStatus {
  __type?: "ProfilingStatus";
  /**
   * <p>The time, in milliseconds since the epoch, when the latest agent was orchestrated.</p>
   */
  latestAgentOrchestratedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the latest agent was reported..</p>
   */
  latestAgentProfileReportedAt?: Date;

  /**
   * <p>The latest aggregated profile</p>
   */
  latestAggregatedProfile?: AggregatedProfileTime;
}

export namespace ProfilingStatus {
  export const filterSensitiveLog = (obj: ProfilingStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProfilingStatus =>
    __isa(o, "ProfilingStatus");
}

/**
 * <p>The structure representing the updateProfilingGroupRequest.</p>
 */
export interface UpdateProfilingGroupRequest {
  __type?: "UpdateProfilingGroupRequest";
  /**
   * <p/>
   */
  agentOrchestrationConfig: AgentOrchestrationConfig | undefined;

  /**
   * <p>The name of the profiling group to update.</p>
   */
  profilingGroupName: string | undefined;
}

export namespace UpdateProfilingGroupRequest {
  export const filterSensitiveLog = (
    obj: UpdateProfilingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateProfilingGroupRequest =>
    __isa(o, "UpdateProfilingGroupRequest");
}

/**
 * <p>The structure representing the updateProfilingGroupResponse.</p>
 */
export interface UpdateProfilingGroupResponse {
  __type?: "UpdateProfilingGroupResponse";
  /**
   * <p>Updated information about the profiling group.</p>
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

export namespace UpdateProfilingGroupResponse {
  export const filterSensitiveLog = (
    obj: UpdateProfilingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateProfilingGroupResponse =>
    __isa(o, "UpdateProfilingGroupResponse");
}

export enum ActionGroup {
  /**
   * Permission group type for Agent APIs - ConfigureAgent, PostAgentProfile
   */
  AGENT_PERMISSIONS = "agentPermissions"
}

/**
 * <p>The structure representing the getPolicyRequest.</p>
 */
export interface GetPolicyRequest {
  __type?: "GetPolicyRequest";
  /**
   * <p>The name of the profiling group.</p>
   */
  profilingGroupName: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyRequest =>
    __isa(o, "GetPolicyRequest");
}

/**
 * <p>The structure representing the getPolicyResponse.</p>
 */
export interface GetPolicyResponse {
  __type?: "GetPolicyResponse";
  /**
   * <p>The resource-based policy attached to the <code>ProfilingGroup</code>.</p>
   */
  policy: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  revisionId: string | undefined;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyResponse =>
    __isa(o, "GetPolicyResponse");
}

/**
 * <p>The structure representing the putPermissionRequest.</p>
 */
export interface PutPermissionRequest {
  __type?: "PutPermissionRequest";
  /**
   * <p>The list of actions that the users and roles can perform on the profiling
   *             group.</p>
   */
  actionGroup: ActionGroup | string | undefined;

  /**
   * <p>The list of role and user ARNs or the accountId that needs access (wildcards are not
   *             allowed).</p>
   */
  principals: string[] | undefined;

  /**
   * <p>The name of the profiling group.</p>
   */
  profilingGroupName: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy. This is required, if a
   *             policy exists for the profiling group. This is not required when creating the policy for
   *             the first time.</p>
   */
  revisionId?: string;
}

export namespace PutPermissionRequest {
  export const filterSensitiveLog = (obj: PutPermissionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPermissionRequest =>
    __isa(o, "PutPermissionRequest");
}

/**
 * <p>The structure representing the putPermissionResponse.</p>
 */
export interface PutPermissionResponse {
  __type?: "PutPermissionResponse";
  /**
   * <p>The resource-based policy.</p>
   */
  policy: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  revisionId: string | undefined;
}

export namespace PutPermissionResponse {
  export const filterSensitiveLog = (obj: PutPermissionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutPermissionResponse =>
    __isa(o, "PutPermissionResponse");
}

/**
 * <p>The structure representing the removePermissionRequest.</p>
 */
export interface RemovePermissionRequest {
  __type?: "RemovePermissionRequest";
  /**
   * <p>The list of actions that the users and roles can perform on the profiling
   *             group.</p>
   */
  actionGroup: ActionGroup | string | undefined;

  /**
   * <p>The name of the profiling group.</p>
   */
  profilingGroupName: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  revisionId: string | undefined;
}

export namespace RemovePermissionRequest {
  export const filterSensitiveLog = (obj: RemovePermissionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemovePermissionRequest =>
    __isa(o, "RemovePermissionRequest");
}

/**
 * <p>The structure representing the removePermissionResponse.</p>
 */
export interface RemovePermissionResponse {
  __type?: "RemovePermissionResponse";
  /**
   * <p>The resource-based policy.</p>
   */
  policy: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  revisionId: string | undefined;
}

export namespace RemovePermissionResponse {
  export const filterSensitiveLog = (obj: RemovePermissionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemovePermissionResponse =>
    __isa(o, "RemovePermissionResponse");
}

/**
 * <p>The structure representing the getProfileRequest.</p>
 */
export interface GetProfileRequest {
  __type?: "GetProfileRequest";
  /**
   * <p>The format of the profile to return. You can choose <code>application/json</code>
   *         or the default <code>application/x-amzn-ion</code>.
   *         </p>
   */
  accept?: string;

  /**
   * <p/>
   *          <p>You must specify exactly two of the following parameters:
   *         <code>startTime</code>, <code>period</code>, and <code>endTime</code>.
   *       </p>
   */
  endTime?: Date;

  /**
   * <p>The maximum depth of the graph.</p>
   */
  maxDepth?: number;

  /**
   * <p>The period of the profile to get. The time range
   *         must be in the past and not longer than one week.
   *       </p>
   *          <p>You must specify exactly two of the following parameters:
   *         <code>startTime</code>, <code>period</code>, and <code>endTime</code>.
   *       </p>
   */
  period?: string;

  /**
   * <p>The name of the profiling group to get.</p>
   */
  profilingGroupName: string | undefined;

  /**
   * <p>The start time of the profile to get.</p>
   *          <p>You must specify exactly two of the following parameters:
   *         <code>startTime</code>, <code>period</code>, and <code>endTime</code>.
   *       </p>
   */
  startTime?: Date;
}

export namespace GetProfileRequest {
  export const filterSensitiveLog = (obj: GetProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetProfileRequest =>
    __isa(o, "GetProfileRequest");
}

/**
 * <p>The structure representing the getProfileResponse.</p>
 */
export interface GetProfileResponse {
  __type?: "GetProfileResponse";
  /**
   * <p>The content encoding of the profile.</p>
   */
  contentEncoding?: string;

  /**
   * <p>The content type of the profile in the payload. It is
   *         either <code>application/json</code> or the default
   *         <code>application/x-amzn-ion</code>.</p>
   */
  contentType: string | undefined;

  /**
   * <p>Information about the profile.</p>
   */
  profile: Uint8Array | undefined;
}

export namespace GetProfileResponse {
  export const filterSensitiveLog = (obj: GetProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetProfileResponse =>
    __isa(o, "GetProfileResponse");
}

/**
 * <p>The structure representing the listProfileTimesRequest.</p>
 */
export interface ListProfileTimesRequest {
  __type?: "ListProfileTimesRequest";
  /**
   * <p>The end time of the time range from which to list the profiles.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The maximum number of profile time results returned by <code>ListProfileTimes</code>
   *          in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns
   *          <code>maxResults</code> results in a single page with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListProfileTimes</code> request with the returned
   *          <code>nextToken</code> value.
   *       </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The order (ascending or descending by start time of the profile) to
   *         use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>.
   *       </p>
   */
  orderBy?: OrderBy | string;

  /**
   * <p>The aggregation period.</p>
   */
  period: AggregationPeriod | string | undefined;

  /**
   * <p>The name of the profiling group.</p>
   */
  profilingGroupName: string | undefined;

  /**
   * <p>The start time of the time range from which to list the profiles.</p>
   */
  startTime: Date | undefined;
}

export namespace ListProfileTimesRequest {
  export const filterSensitiveLog = (obj: ListProfileTimesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProfileTimesRequest =>
    __isa(o, "ListProfileTimesRequest");
}

/**
 * <p>The structure representing the listProfileTimesResponse.</p>
 */
export interface ListProfileTimesResponse {
  __type?: "ListProfileTimesResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListProfileTimes</code> request.
   *          When the results of a <code>ListProfileTimes</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>The list of start times of the available profiles for the aggregation
   *         period in the specified time range.
   *       </p>
   */
  profileTimes: ProfileTime[] | undefined;
}

export namespace ListProfileTimesResponse {
  export const filterSensitiveLog = (obj: ListProfileTimesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProfileTimesResponse =>
    __isa(o, "ListProfileTimesResponse");
}

/**
 * <p>Information about the profile time.</p>
 */
export interface ProfileTime {
  __type?: "ProfileTime";
  /**
   * <p>The start time of the profile.</p>
   */
  start?: Date;
}

export namespace ProfileTime {
  export const filterSensitiveLog = (obj: ProfileTime): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProfileTime => __isa(o, "ProfileTime");
}

/**
 * <p>The structure representing the postAgentProfileRequest.</p>
 */
export interface PostAgentProfileRequest {
  __type?: "PostAgentProfileRequest";
  /**
   * <p/>
   */
  agentProfile: Uint8Array | undefined;

  /**
   * <p/>
   */
  contentType: string | undefined;

  /**
   * <p/>
   */
  profileToken?: string;

  /**
   * <p/>
   */
  profilingGroupName: string | undefined;
}

export namespace PostAgentProfileRequest {
  export const filterSensitiveLog = (obj: PostAgentProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostAgentProfileRequest =>
    __isa(o, "PostAgentProfileRequest");
}

/**
 * <p>The structure representing the postAgentProfileResponse.</p>
 */
export interface PostAgentProfileResponse {
  __type?: "PostAgentProfileResponse";
}

export namespace PostAgentProfileResponse {
  export const filterSensitiveLog = (obj: PostAgentProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PostAgentProfileResponse =>
    __isa(o, "PostAgentProfileResponse");
}

export interface FrameMetric {
  __type?: "FrameMetric";
  frameName: string | undefined;
  threadStates: string[] | undefined;
  type: MetricType | string | undefined;
}

export namespace FrameMetric {
  export const filterSensitiveLog = (obj: FrameMetric): any => ({
    ...obj
  });
  export const isa = (o: any): o is FrameMetric => __isa(o, "FrameMetric");
}

export interface RetrieveTimeSeriesRequest {
  __type?: "RetrieveTimeSeriesRequest";
  endTime?: Date;
  frameMetrics?: FrameMetric[];
  period?: string;
  profilingGroupName: string | undefined;
  startTime?: Date;
  targetResolution?: AggregationPeriod | string;
}

export namespace RetrieveTimeSeriesRequest {
  export const filterSensitiveLog = (obj: RetrieveTimeSeriesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveTimeSeriesRequest =>
    __isa(o, "RetrieveTimeSeriesRequest");
}

export interface RetrieveTimeSeriesResponse {
  __type?: "RetrieveTimeSeriesResponse";
  data: number[][] | undefined;
  endTime: Date | undefined;
  endTimes: Date[] | undefined;
  frameMetrics: FrameMetric[] | undefined;
  resolution: AggregationPeriod | string | undefined;
  startTime: Date | undefined;
  unprocessedEndTimes: { [key: string]: Date[] } | undefined;
}

export namespace RetrieveTimeSeriesResponse {
  export const filterSensitiveLog = (obj: RetrieveTimeSeriesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveTimeSeriesResponse =>
    __isa(o, "RetrieveTimeSeriesResponse");
}
