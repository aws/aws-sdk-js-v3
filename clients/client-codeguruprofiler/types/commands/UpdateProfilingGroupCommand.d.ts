import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { UpdateProfilingGroupRequest, UpdateProfilingGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProfilingGroupCommandInput = UpdateProfilingGroupRequest;
export declare type UpdateProfilingGroupCommandOutput = UpdateProfilingGroupResponse & __MetadataBearer;
export declare class UpdateProfilingGroupCommand extends $Command<UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: UpdateProfilingGroupCommandInput;
    constructor(input: UpdateProfilingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
