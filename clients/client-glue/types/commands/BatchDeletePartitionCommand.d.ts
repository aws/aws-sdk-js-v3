import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeletePartitionRequest, BatchDeletePartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeletePartitionCommandInput = BatchDeletePartitionRequest;
export declare type BatchDeletePartitionCommandOutput = BatchDeletePartitionResponse & __MetadataBearer;
export declare class BatchDeletePartitionCommand extends $Command<BatchDeletePartitionCommandInput, BatchDeletePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchDeletePartitionCommandInput;
    constructor(input: BatchDeletePartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeletePartitionCommandInput, BatchDeletePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
