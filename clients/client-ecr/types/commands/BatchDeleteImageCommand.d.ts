import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchDeleteImageRequest, BatchDeleteImageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteImageCommandInput = BatchDeleteImageRequest;
export declare type BatchDeleteImageCommandOutput = BatchDeleteImageResponse & __MetadataBearer;
export declare class BatchDeleteImageCommand extends $Command<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput, ECRClientResolvedConfig> {
    readonly input: BatchDeleteImageCommandInput;
    constructor(input: BatchDeleteImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput>;
    private serialize;
    private deserialize;
}
