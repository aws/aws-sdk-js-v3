import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { DeleteProfilingGroupRequest, DeleteProfilingGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProfilingGroupCommandInput = DeleteProfilingGroupRequest;
export declare type DeleteProfilingGroupCommandOutput = DeleteProfilingGroupResponse & __MetadataBearer;
export declare class DeleteProfilingGroupCommand extends $Command<DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: DeleteProfilingGroupCommandInput;
    constructor(input: DeleteProfilingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
