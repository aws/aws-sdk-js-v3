import { CodeGuruProfilerClient } from "./CodeGuruProfilerClient";
import { ConfigureAgentCommandInput, ConfigureAgentCommandOutput } from "./commands/ConfigureAgentCommand";
import { CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput } from "./commands/CreateProfilingGroupCommand";
import { DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput } from "./commands/DeleteProfilingGroupCommand";
import { DescribeProfilingGroupCommandInput, DescribeProfilingGroupCommandOutput } from "./commands/DescribeProfilingGroupCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "./commands/ListProfileTimesCommand";
import { ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput } from "./commands/ListProfilingGroupsCommand";
import { PostAgentProfileCommandInput, PostAgentProfileCommandOutput } from "./commands/PostAgentProfileCommand";
import { UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput } from "./commands/UpdateProfilingGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Example service documentation.</p>
 */
export declare class CodeGuruProfiler extends CodeGuruProfilerClient {
    /**
     * Provides the configuration to use for an agent of the profiling group.
     */
    configureAgent(args: ConfigureAgentCommandInput, options?: __HttpHandlerOptions): Promise<ConfigureAgentCommandOutput>;
    configureAgent(args: ConfigureAgentCommandInput, cb: (err: any, data?: ConfigureAgentCommandOutput) => void): void;
    configureAgent(args: ConfigureAgentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfigureAgentCommandOutput) => void): void;
    /**
     * Create a profiling group.
     */
    createProfilingGroup(args: CreateProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfilingGroupCommandOutput>;
    createProfilingGroup(args: CreateProfilingGroupCommandInput, cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void): void;
    createProfilingGroup(args: CreateProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProfilingGroupCommandOutput) => void): void;
    /**
     * Delete a profiling group.
     */
    deleteProfilingGroup(args: DeleteProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProfilingGroupCommandOutput>;
    deleteProfilingGroup(args: DeleteProfilingGroupCommandInput, cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void): void;
    deleteProfilingGroup(args: DeleteProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProfilingGroupCommandOutput) => void): void;
    /**
     * Describe a profiling group.
     */
    describeProfilingGroup(args: DescribeProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProfilingGroupCommandOutput>;
    describeProfilingGroup(args: DescribeProfilingGroupCommandInput, cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void): void;
    describeProfilingGroup(args: DescribeProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProfilingGroupCommandOutput) => void): void;
    /**
     * List profiling groups in the account.
     */
    listProfilingGroups(args: ListProfilingGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListProfilingGroupsCommandOutput>;
    listProfilingGroups(args: ListProfilingGroupsCommandInput, cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void): void;
    listProfilingGroups(args: ListProfilingGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfilingGroupsCommandOutput) => void): void;
    /**
     * Update a profiling group.
     */
    updateProfilingGroup(args: UpdateProfilingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfilingGroupCommandOutput>;
    updateProfilingGroup(args: UpdateProfilingGroupCommandInput, cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void): void;
    updateProfilingGroup(args: UpdateProfilingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProfilingGroupCommandOutput) => void): void;
    /**
     * Get the aggregated profile of a profiling group for the specified time range.
     *   If the requested time range does not align with the available aggregated profiles, it will be expanded to attain alignment.
     *   If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range.
     *   For instance, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, then the returned profile will be from 00:15 to 00:20.
     */
    getProfile(args: GetProfileCommandInput, options?: __HttpHandlerOptions): Promise<GetProfileCommandOutput>;
    getProfile(args: GetProfileCommandInput, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
    getProfile(args: GetProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProfileCommandOutput) => void): void;
    /**
     * List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
     */
    listProfileTimes(args: ListProfileTimesCommandInput, options?: __HttpHandlerOptions): Promise<ListProfileTimesCommandOutput>;
    listProfileTimes(args: ListProfileTimesCommandInput, cb: (err: any, data?: ListProfileTimesCommandOutput) => void): void;
    listProfileTimes(args: ListProfileTimesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProfileTimesCommandOutput) => void): void;
    /**
     * Submit profile collected by an agent belonging to a profiling group for aggregation.
     */
    postAgentProfile(args: PostAgentProfileCommandInput, options?: __HttpHandlerOptions): Promise<PostAgentProfileCommandOutput>;
    postAgentProfile(args: PostAgentProfileCommandInput, cb: (err: any, data?: PostAgentProfileCommandOutput) => void): void;
    postAgentProfile(args: PostAgentProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PostAgentProfileCommandOutput) => void): void;
}
