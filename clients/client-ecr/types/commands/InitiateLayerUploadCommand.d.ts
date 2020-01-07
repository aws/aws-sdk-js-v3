import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { InitiateLayerUploadRequest, InitiateLayerUploadResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InitiateLayerUploadCommandInput = InitiateLayerUploadRequest;
export declare type InitiateLayerUploadCommandOutput = InitiateLayerUploadResponse & __MetadataBearer;
export declare class InitiateLayerUploadCommand extends $Command<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput, ECRClientResolvedConfig> {
    readonly input: InitiateLayerUploadCommandInput;
    constructor(input: InitiateLayerUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput>;
    private serialize;
    private deserialize;
}
