import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { PollForTaskInput, PollForTaskOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PollForTaskCommandInput = PollForTaskInput;
export declare type PollForTaskCommandOutput = PollForTaskOutput & __MetadataBearer;
export declare class PollForTaskCommand extends $Command<PollForTaskCommandInput, PollForTaskCommandOutput, DataPipelineClientResolvedConfig> {
    readonly input: PollForTaskCommandInput;
    constructor(input: PollForTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataPipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForTaskCommandInput, PollForTaskCommandOutput>;
    private serialize;
    private deserialize;
}
