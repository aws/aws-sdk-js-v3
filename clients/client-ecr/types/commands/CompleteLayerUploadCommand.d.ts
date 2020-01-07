import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CompleteLayerUploadCommandInput = CompleteLayerUploadRequest;
export declare type CompleteLayerUploadCommandOutput = CompleteLayerUploadResponse & __MetadataBearer;
export declare class CompleteLayerUploadCommand extends $Command<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput, ECRClientResolvedConfig> {
    readonly input: CompleteLayerUploadCommandInput;
    constructor(input: CompleteLayerUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput>;
    private serialize;
    private deserialize;
}
