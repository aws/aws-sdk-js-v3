import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerScheduleRequest, StopCrawlerScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopCrawlerScheduleCommandInput = StopCrawlerScheduleRequest;
export declare type StopCrawlerScheduleCommandOutput = StopCrawlerScheduleResponse & __MetadataBearer;
export declare class StopCrawlerScheduleCommand extends $Command<StopCrawlerScheduleCommandInput, StopCrawlerScheduleCommandOutput, GlueClientResolvedConfig> {
    readonly input: StopCrawlerScheduleCommandInput;
    constructor(input: StopCrawlerScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopCrawlerScheduleCommandInput, StopCrawlerScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
