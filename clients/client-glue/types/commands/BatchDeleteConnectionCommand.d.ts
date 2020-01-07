import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeleteConnectionRequest, BatchDeleteConnectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteConnectionCommandInput = BatchDeleteConnectionRequest;
export declare type BatchDeleteConnectionCommandOutput = BatchDeleteConnectionResponse & __MetadataBearer;
export declare class BatchDeleteConnectionCommand extends $Command<BatchDeleteConnectionCommandInput, BatchDeleteConnectionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchDeleteConnectionCommandInput;
    constructor(input: BatchDeleteConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteConnectionCommandInput, BatchDeleteConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
