import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartCrawlerScheduleRequest, StartCrawlerScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartCrawlerScheduleCommandInput = StartCrawlerScheduleRequest;
export declare type StartCrawlerScheduleCommandOutput = StartCrawlerScheduleResponse & __MetadataBearer;
export declare class StartCrawlerScheduleCommand extends $Command<StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartCrawlerScheduleCommandInput;
    constructor(input: StartCrawlerScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartCrawlerScheduleCommandInput, StartCrawlerScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
