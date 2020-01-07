import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchGetImageRequest, BatchGetImageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetImageCommandInput = BatchGetImageRequest;
export declare type BatchGetImageCommandOutput = BatchGetImageResponse & __MetadataBearer;
export declare class BatchGetImageCommand extends $Command<BatchGetImageCommandInput, BatchGetImageCommandOutput, ECRClientResolvedConfig> {
    readonly input: BatchGetImageCommandInput;
    constructor(input: BatchGetImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetImageCommandInput, BatchGetImageCommandOutput>;
    private serialize;
    private deserialize;
}
