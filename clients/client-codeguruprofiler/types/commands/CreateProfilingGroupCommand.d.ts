import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { CreateProfilingGroupRequest, CreateProfilingGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProfilingGroupCommandInput = CreateProfilingGroupRequest;
export declare type CreateProfilingGroupCommandOutput = CreateProfilingGroupResponse & __MetadataBearer;
export declare class CreateProfilingGroupCommand extends $Command<CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: CreateProfilingGroupCommandInput;
    constructor(input: CreateProfilingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
