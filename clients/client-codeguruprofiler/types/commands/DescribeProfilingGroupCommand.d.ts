import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { DescribeProfilingGroupRequest, DescribeProfilingGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProfilingGroupCommandInput = DescribeProfilingGroupRequest;
export declare type DescribeProfilingGroupCommandOutput = DescribeProfilingGroupResponse & __MetadataBearer;
export declare class DescribeProfilingGroupCommand extends $Command<DescribeProfilingGroupCommandInput, DescribeProfilingGroupCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: DescribeProfilingGroupCommandInput;
    constructor(input: DescribeProfilingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProfilingGroupCommandInput, DescribeProfilingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
