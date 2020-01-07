import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDownloadUrlForLayerCommandInput = GetDownloadUrlForLayerRequest;
export declare type GetDownloadUrlForLayerCommandOutput = GetDownloadUrlForLayerResponse & __MetadataBearer;
export declare class GetDownloadUrlForLayerCommand extends $Command<GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetDownloadUrlForLayerCommandInput;
    constructor(input: GetDownloadUrlForLayerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput>;
    private serialize;
    private deserialize;
}
