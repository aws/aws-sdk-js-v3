import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeleteTableRequest, BatchDeleteTableResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteTableCommandInput = BatchDeleteTableRequest;
export declare type BatchDeleteTableCommandOutput = BatchDeleteTableResponse & __MetadataBearer;
export declare class BatchDeleteTableCommand extends $Command<BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchDeleteTableCommandInput;
    constructor(input: BatchDeleteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput>;
    private serialize;
    private deserialize;
}
