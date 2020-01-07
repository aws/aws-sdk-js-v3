import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * The time range of an aggregated profile.
 */
export interface AggregatedProfileTime {
    __type?: "AggregatedProfileTime";
    /**
     * The aggregation period of the aggregated profile.
     */
    period?: AggregationPeriod | string;
    /**
     * The start time of the aggregated profile.
     */
    start?: Date;
}
export declare namespace AggregatedProfileTime {
    function isa(o: any): o is AggregatedProfileTime;
}
export declare enum AggregationPeriod {
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
/**
 * Request can can cause an inconsistent state for the resource.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ConflictException {
    function isa(o: any): o is ConflictException;
}
/**
 * Unexpected error during processing of request.
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message: string | undefined;
}
export declare namespace InternalServerException {
    function isa(o: any): o is InternalServerException;
}
export declare enum OrderBy {
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
 * Request references a resource which does not exist.
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * Request would cause a service quota to be exceeded.
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ServiceQuotaExceededException {
    function isa(o: any): o is ServiceQuotaExceededException;
}
/**
 * Request was denied due to request throttling.
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ThrottlingException {
    function isa(o: any): o is ThrottlingException;
}
/**
 * The input fails to satisfy the constraints of the API.
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message: string | undefined;
}
export declare namespace ValidationException {
    function isa(o: any): o is ValidationException;
}
/**
 * The configuration for the agent to use.
 */
export interface AgentConfiguration {
    __type?: "AgentConfiguration";
    /**
     * Specifies the period to follow the configuration (to profile or not) and call back to get a new configuration.
     */
    periodInSeconds: number | undefined;
    /**
     * Specifies if the profiling should be enabled by the agent.
     */
    shouldProfile: boolean | undefined;
}
export declare namespace AgentConfiguration {
    function isa(o: any): o is AgentConfiguration;
}
/**
 * Request for ConfigureAgent operation.
 */
export interface ConfigureAgentRequest {
    __type?: "ConfigureAgentRequest";
    /**
     * Identifier of the instance of  compute fleet being profiled by the agent. For instance, host name in EC2, task id for ECS, function name for AWS Lambda
     */
    fleetInstanceId?: string;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
}
export declare namespace ConfigureAgentRequest {
    function isa(o: any): o is ConfigureAgentRequest;
}
/**
 * Response for ConfigureAgent operation.
 */
export interface ConfigureAgentResponse {
    __type?: "ConfigureAgentResponse";
    /**
     * The configuration for the agent to use.
     */
    configuration: AgentConfiguration | undefined;
}
export declare namespace ConfigureAgentResponse {
    function isa(o: any): o is ConfigureAgentResponse;
}
/**
 * Configuration to orchestrate agents to create and report agent profiles of the profiling group.
 *   Agents are orchestrated if they follow the agent orchestration protocol.
 */
export interface AgentOrchestrationConfig {
    __type?: "AgentOrchestrationConfig";
    /**
     * If the agents should be enabled to create and report profiles.
     */
    profilingEnabled: boolean | undefined;
}
export declare namespace AgentOrchestrationConfig {
    function isa(o: any): o is AgentOrchestrationConfig;
}
/**
 * Request for CreateProfilingGroup operation.
 */
export interface CreateProfilingGroupRequest {
    __type?: "CreateProfilingGroupRequest";
    /**
     * Configuration to orchestrate agents to create and report agent profiles of the profiling group.
     *   Agents are orchestrated if they follow the agent orchestration protocol.
     */
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    /**
     * Client token for the request.
     */
    clientToken?: string;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
}
export declare namespace CreateProfilingGroupRequest {
    function isa(o: any): o is CreateProfilingGroupRequest;
}
/**
 * Response for CreateProfilingGroup operation.
 */
export interface CreateProfilingGroupResponse {
    __type?: "CreateProfilingGroupResponse";
    /**
     * The description of a profiling group.
     */
    profilingGroup: ProfilingGroupDescription | undefined;
}
export declare namespace CreateProfilingGroupResponse {
    function isa(o: any): o is CreateProfilingGroupResponse;
}
/**
 * Request for DeleteProfilingGroup operation.
 */
export interface DeleteProfilingGroupRequest {
    __type?: "DeleteProfilingGroupRequest";
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
}
export declare namespace DeleteProfilingGroupRequest {
    function isa(o: any): o is DeleteProfilingGroupRequest;
}
/**
 * Response for DeleteProfilingGroup operation.
 */
export interface DeleteProfilingGroupResponse {
    __type?: "DeleteProfilingGroupResponse";
}
export declare namespace DeleteProfilingGroupResponse {
    function isa(o: any): o is DeleteProfilingGroupResponse;
}
/**
 * Request for DescribeProfilingGroup operation.
 */
export interface DescribeProfilingGroupRequest {
    __type?: "DescribeProfilingGroupRequest";
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
}
export declare namespace DescribeProfilingGroupRequest {
    function isa(o: any): o is DescribeProfilingGroupRequest;
}
/**
 * Response for DescribeProfilingGroup operation.
 */
export interface DescribeProfilingGroupResponse {
    __type?: "DescribeProfilingGroupResponse";
    /**
     * The description of a profiling group.
     */
    profilingGroup: ProfilingGroupDescription | undefined;
}
export declare namespace DescribeProfilingGroupResponse {
    function isa(o: any): o is DescribeProfilingGroupResponse;
}
/**
 * Request for ListProfilingGroups operation.
 */
export interface ListProfilingGroupsRequest {
    __type?: "ListProfilingGroupsRequest";
    /**
     * If set to true, returns the full description of the profiling groups instead of the names. Defaults to false.
     */
    includeDescription?: boolean;
    /**
     * Upper bound on the number of results to list in a single call.
     */
    maxResults?: number;
    /**
     * Token for paginating results.
     */
    nextToken?: string;
}
export declare namespace ListProfilingGroupsRequest {
    function isa(o: any): o is ListProfilingGroupsRequest;
}
/**
 * Response for ListProfilingGroups operation.
 */
export interface ListProfilingGroupsResponse {
    __type?: "ListProfilingGroupsResponse";
    /**
     * Token for paginating results.
     */
    nextToken?: string;
    /**
     * List of profiling group names.
     */
    profilingGroupNames: Array<string> | undefined;
    /**
     * List of profiling group descriptions.
     */
    profilingGroups?: Array<ProfilingGroupDescription>;
}
export declare namespace ListProfilingGroupsResponse {
    function isa(o: any): o is ListProfilingGroupsResponse;
}
/**
 * The description of a profiling group.
 */
export interface ProfilingGroupDescription {
    __type?: "ProfilingGroupDescription";
    /**
     * Configuration to orchestrate agents to create and report agent profiles of the profiling group.
     *   Agents are orchestrated if they follow the agent orchestration protocol.
     */
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    /**
     * The ARN of the profiling group.
     */
    arn?: string;
    /**
     * The timestamp of when the profiling group was created.
     */
    createdAt?: Date;
    /**
     * The name of the profiling group.
     */
    name?: string;
    /**
     * The status of profiling of a profiling group.
     */
    profilingStatus?: ProfilingStatus;
    /**
     * The timestamp of when the profiling group was last updated.
     */
    updatedAt?: Date;
}
export declare namespace ProfilingGroupDescription {
    function isa(o: any): o is ProfilingGroupDescription;
}
/**
 * The status of profiling of a profiling group.
 */
export interface ProfilingStatus {
    __type?: "ProfilingStatus";
    /**
     * Timestamp of when the last interaction of the agent with configureAgent API for orchestration.
     */
    latestAgentOrchestratedAt?: Date;
    /**
     * Timestamp of when the latest agent profile was successfully reported.
     */
    latestAgentProfileReportedAt?: Date;
    /**
     * The time range of latest aggregated profile available.
     */
    latestAggregatedProfile?: AggregatedProfileTime;
}
export declare namespace ProfilingStatus {
    function isa(o: any): o is ProfilingStatus;
}
/**
 * Request for UpdateProfilingGroup operation.
 */
export interface UpdateProfilingGroupRequest {
    __type?: "UpdateProfilingGroupRequest";
    /**
     * Remote configuration to configure the agents of the profiling group.
     */
    agentOrchestrationConfig: AgentOrchestrationConfig | undefined;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
}
export declare namespace UpdateProfilingGroupRequest {
    function isa(o: any): o is UpdateProfilingGroupRequest;
}
/**
 * Response for UpdateProfilingGroup operation.
 */
export interface UpdateProfilingGroupResponse {
    __type?: "UpdateProfilingGroupResponse";
    /**
     * The description of a profiling group.
     */
    profilingGroup: ProfilingGroupDescription | undefined;
}
export declare namespace UpdateProfilingGroupResponse {
    function isa(o: any): o is UpdateProfilingGroupResponse;
}
/**
 * Request for GetProfile operation.
 */
export interface GetProfileRequest {
    __type?: "GetProfileRequest";
    /**
     * The format of the profile to return. Supports application/json or application/x-amzn-ion.
     *     Defaults to application/x-amzn-ion.
     */
    accept?: string;
    /**
     * The end time of the profile to get. Either period or endTime must be specified.
     *     Must be greater than start and the overall time range to be in the past and not larger than a week.
     */
    endTime?: Date;
    /**
     * Limit the max depth of the profile.
     */
    maxDepth?: number;
    /**
     * The period of the profile to get. Exactly two of `startTime`, `period` and `endTime` must be specified.
     *     Must be positive and the overall time range to be in the past and not larger than a week.
     */
    period?: string;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
    /**
     * The start time of the profile to get.
     */
    startTime?: Date;
}
export declare namespace GetProfileRequest {
    function isa(o: any): o is GetProfileRequest;
}
/**
 * Response for GetProfile operation.
 */
export interface GetProfileResponse {
    __type?: "GetProfileResponse";
    /**
     * The content encoding of the profile in the payload.
     */
    contentEncoding?: string;
    /**
     * The content type of the profile in the payload.
     *     Will be application/json or application/x-amzn-ion based on Accept header in the request.
     */
    contentType: string | undefined;
    /**
     * The profile representing the aggregation of agent profiles of the profiling group for a time range.
     */
    profile: Uint8Array | undefined;
}
export declare namespace GetProfileResponse {
    function isa(o: any): o is GetProfileResponse;
}
/**
 * Request for ListProfileTimes operation.
 */
export interface ListProfileTimesRequest {
    __type?: "ListProfileTimesRequest";
    /**
     * The end time of the time range to list profiles until.
     */
    endTime: Date | undefined;
    /**
     * Upper bound on the number of results to list in a single call.
     */
    maxResults?: number;
    /**
     * Token for paginating results.
     */
    nextToken?: string;
    /**
     * The order (ascending or descending by start time of the profile) to list the profiles by.
     *     Defaults to TIMESTAMP_DESCENDING.
     */
    orderBy?: OrderBy | string;
    /**
     * The aggregation period to list the profiles for.
     */
    period: AggregationPeriod | string | undefined;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
    /**
     * The start time of the time range to list the profiles from.
     */
    startTime: Date | undefined;
}
export declare namespace ListProfileTimesRequest {
    function isa(o: any): o is ListProfileTimesRequest;
}
/**
 * Response for ListProfileTimes operation.
 */
export interface ListProfileTimesResponse {
    __type?: "ListProfileTimesResponse";
    /**
     * Token for paginating results.
     */
    nextToken?: string;
    /**
     * List of start times of the available profiles for the aggregation period in the specified time range.
     */
    profileTimes: Array<ProfileTime> | undefined;
}
export declare namespace ListProfileTimesResponse {
    function isa(o: any): o is ListProfileTimesResponse;
}
/**
 * Periods of time used for aggregation of profiles, represented using ISO 8601 format.
 */
export interface ProfileTime {
    __type?: "ProfileTime";
    /**
     * The start time of the profile.
     */
    start?: Date;
}
export declare namespace ProfileTime {
    function isa(o: any): o is ProfileTime;
}
/**
 * Request for PostAgentProfile operation.
 */
export interface PostAgentProfileRequest {
    __type?: "PostAgentProfileRequest";
    /**
     * The profile collected by an agent for a time range.
     */
    agentProfile: Uint8Array | undefined;
    /**
     * The content type of the agent profile in the payload.
     *     Recommended to send the profile gzipped with content-type application/octet-stream.
     *     Other accepted values are application/x-amzn-ion and application/json for unzipped Ion and JSON respectively.
     */
    contentType: string | undefined;
    /**
     * Client generated token to deduplicate the agent profile during aggregation.
     */
    profileToken?: string;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string | undefined;
}
export declare namespace PostAgentProfileRequest {
    function isa(o: any): o is PostAgentProfileRequest;
}
/**
 * Response for PostAgentProfile operation.
 */
export interface PostAgentProfileResponse {
    __type?: "PostAgentProfileResponse";
}
export declare namespace PostAgentProfileResponse {
    function isa(o: any): o is PostAgentProfileResponse;
}
