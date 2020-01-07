import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ListProfilingGroupsRequest, ListProfilingGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProfilingGroupsCommandInput = ListProfilingGroupsRequest;
export declare type ListProfilingGroupsCommandOutput = ListProfilingGroupsResponse & __MetadataBearer;
export declare class ListProfilingGroupsCommand extends $Command<ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ListProfilingGroupsCommandInput;
    constructor(input: ListProfilingGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
