import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeleteTableVersionRequest, BatchDeleteTableVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteTableVersionCommandInput = BatchDeleteTableVersionRequest;
export declare type BatchDeleteTableVersionCommandOutput = BatchDeleteTableVersionResponse & __MetadataBearer;
export declare class BatchDeleteTableVersionCommand extends $Command<BatchDeleteTableVersionCommandInput, BatchDeleteTableVersionCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchDeleteTableVersionCommandInput;
    constructor(input: BatchDeleteTableVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteTableVersionCommandInput, BatchDeleteTableVersionCommandOutput>;
    private serialize;
    private deserialize;
}
