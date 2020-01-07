import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetWorkflowsRequest, BatchGetWorkflowsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetWorkflowsCommandInput = BatchGetWorkflowsRequest;
export declare type BatchGetWorkflowsCommandOutput = BatchGetWorkflowsResponse & __MetadataBearer;
export declare class BatchGetWorkflowsCommand extends $Command<BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetWorkflowsCommandInput;
    constructor(input: BatchGetWorkflowsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput>;
    private serialize;
    private deserialize;
}
