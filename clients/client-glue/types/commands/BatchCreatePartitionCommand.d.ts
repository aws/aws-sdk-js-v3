import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchCreatePartitionRequest, BatchCreatePartitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchCreatePartitionCommandInput = BatchCreatePartitionRequest;
export declare type BatchCreatePartitionCommandOutput = BatchCreatePartitionResponse & __MetadataBearer;
export declare class BatchCreatePartitionCommand extends $Command<BatchCreatePartitionCommandInput, BatchCreatePartitionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchCreatePartitionCommandInput;
    constructor(input: BatchCreatePartitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCreatePartitionCommandInput, BatchCreatePartitionCommandOutput>;
    private serialize;
    private deserialize;
}
