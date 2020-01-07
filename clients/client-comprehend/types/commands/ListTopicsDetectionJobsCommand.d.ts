import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListTopicsDetectionJobsRequest, ListTopicsDetectionJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTopicsDetectionJobsCommandInput = ListTopicsDetectionJobsRequest;
export declare type ListTopicsDetectionJobsCommandOutput = ListTopicsDetectionJobsResponse & __MetadataBearer;
export declare class ListTopicsDetectionJobsCommand extends $Command<ListTopicsDetectionJobsCommandInput, ListTopicsDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListTopicsDetectionJobsCommandInput;
    constructor(input: ListTopicsDetectionJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTopicsDetectionJobsCommandInput, ListTopicsDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
