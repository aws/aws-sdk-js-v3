import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetConsoleScreenshotRequest, GetConsoleScreenshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConsoleScreenshotCommandInput = GetConsoleScreenshotRequest;
export declare type GetConsoleScreenshotCommandOutput = GetConsoleScreenshotResult & __MetadataBearer;
export declare class GetConsoleScreenshotCommand extends $Command<GetConsoleScreenshotCommandInput, GetConsoleScreenshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetConsoleScreenshotCommandInput;
    constructor(input: GetConsoleScreenshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConsoleScreenshotCommandInput, GetConsoleScreenshotCommandOutput>;
    private serialize;
    private deserialize;
}
