import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { UploadLayerPartRequest, UploadLayerPartResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UploadLayerPartCommandInput = UploadLayerPartRequest;
export declare type UploadLayerPartCommandOutput = UploadLayerPartResponse & __MetadataBearer;
export declare class UploadLayerPartCommand extends $Command<UploadLayerPartCommandInput, UploadLayerPartCommandOutput, ECRClientResolvedConfig> {
    readonly input: UploadLayerPartCommandInput;
    constructor(input: UploadLayerPartCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadLayerPartCommandInput, UploadLayerPartCommandOutput>;
    private serialize;
    private deserialize;
}
