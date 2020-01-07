import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { BatchDeleteDocumentRequest, BatchDeleteDocumentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteDocumentCommandInput = BatchDeleteDocumentRequest;
export declare type BatchDeleteDocumentCommandOutput = BatchDeleteDocumentResponse & __MetadataBearer;
export declare class BatchDeleteDocumentCommand extends $Command<BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput, kendraClientResolvedConfig> {
    readonly input: BatchDeleteDocumentCommandInput;
    constructor(input: BatchDeleteDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
