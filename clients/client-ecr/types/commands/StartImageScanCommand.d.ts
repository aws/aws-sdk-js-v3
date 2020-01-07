import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { StartImageScanRequest, StartImageScanResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartImageScanCommandInput = StartImageScanRequest;
export declare type StartImageScanCommandOutput = StartImageScanResponse & __MetadataBearer;
export declare class StartImageScanCommand extends $Command<StartImageScanCommandInput, StartImageScanCommandOutput, ECRClientResolvedConfig> {
    readonly input: StartImageScanCommandInput;
    constructor(input: StartImageScanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartImageScanCommandInput, StartImageScanCommandOutput>;
    private serialize;
    private deserialize;
}
