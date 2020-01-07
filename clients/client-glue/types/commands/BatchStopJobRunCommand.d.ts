import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchStopJobRunRequest, BatchStopJobRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchStopJobRunCommandInput = BatchStopJobRunRequest;
export declare type BatchStopJobRunCommandOutput = BatchStopJobRunResponse & __MetadataBearer;
export declare class BatchStopJobRunCommand extends $Command<BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchStopJobRunCommandInput;
    constructor(input: BatchStopJobRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
