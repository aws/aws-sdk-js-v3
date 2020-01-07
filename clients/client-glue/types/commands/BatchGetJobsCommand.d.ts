import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetJobsRequest, BatchGetJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetJobsCommandInput = BatchGetJobsRequest;
export declare type BatchGetJobsCommandOutput = BatchGetJobsResponse & __MetadataBearer;
export declare class BatchGetJobsCommand extends $Command<BatchGetJobsCommandInput, BatchGetJobsCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetJobsCommandInput;
    constructor(input: BatchGetJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetJobsCommandInput, BatchGetJobsCommandOutput>;
    private serialize;
    private deserialize;
}
