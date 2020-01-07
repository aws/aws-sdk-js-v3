import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RunTaskRequest, RunTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RunTaskCommandInput = RunTaskRequest;
export declare type RunTaskCommandOutput = RunTaskResponse & __MetadataBearer;
export declare class RunTaskCommand extends $Command<RunTaskCommandInput, RunTaskCommandOutput, ECSClientResolvedConfig> {
    readonly input: RunTaskCommandInput;
    constructor(input: RunTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RunTaskCommandInput, RunTaskCommandOutput>;
    private serialize;
    private deserialize;
}
