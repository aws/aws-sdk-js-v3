import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DownloadDBLogFilePortionCommandInput = DownloadDBLogFilePortionMessage;
export declare type DownloadDBLogFilePortionCommandOutput = DownloadDBLogFilePortionDetails & __MetadataBearer;
export declare class DownloadDBLogFilePortionCommand extends $Command<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput, RDSClientResolvedConfig> {
    readonly input: DownloadDBLogFilePortionCommandInput;
    constructor(input: DownloadDBLogFilePortionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput>;
    private serialize;
    private deserialize;
}
