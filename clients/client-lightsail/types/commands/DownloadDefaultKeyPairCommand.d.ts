import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DownloadDefaultKeyPairRequest, DownloadDefaultKeyPairResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DownloadDefaultKeyPairCommandInput = DownloadDefaultKeyPairRequest;
export declare type DownloadDefaultKeyPairCommandOutput = DownloadDefaultKeyPairResult & __MetadataBearer;
export declare class DownloadDefaultKeyPairCommand extends $Command<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DownloadDefaultKeyPairCommandInput;
    constructor(input: DownloadDefaultKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
