import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetPartitionRequest, BatchGetPartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetPartitionCommandInput = BatchGetPartitionRequest;
export declare type BatchGetPartitionCommandOutput = BatchGetPartitionResponse & __MetadataBearer;
export declare class BatchGetPartitionCommand extends $Command<BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetPartitionCommandInput;
    constructor(input: BatchGetPartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput>;
    private serialize;
    private deserialize;
}
