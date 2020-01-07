import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { BatchPutDocumentRequest, BatchPutDocumentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchPutDocumentCommandInput = BatchPutDocumentRequest;
export declare type BatchPutDocumentCommandOutput = BatchPutDocumentResponse & __MetadataBearer;
export declare class BatchPutDocumentCommand extends $Command<BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput, kendraClientResolvedConfig> {
    readonly input: BatchPutDocumentCommandInput;
    constructor(input: BatchPutDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
