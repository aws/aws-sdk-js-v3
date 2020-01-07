import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageScanningConfigurationRequest, PutImageScanningConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutImageScanningConfigurationCommandInput = PutImageScanningConfigurationRequest;
export declare type PutImageScanningConfigurationCommandOutput = PutImageScanningConfigurationResponse & __MetadataBearer;
export declare class PutImageScanningConfigurationCommand extends $Command<PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutImageScanningConfigurationCommandInput;
    constructor(input: PutImageScanningConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
