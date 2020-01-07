import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateCrawlerScheduleRequest, UpdateCrawlerScheduleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCrawlerScheduleCommandInput = UpdateCrawlerScheduleRequest;
export declare type UpdateCrawlerScheduleCommandOutput = UpdateCrawlerScheduleResponse & __MetadataBearer;
export declare class UpdateCrawlerScheduleCommand extends $Command<UpdateCrawlerScheduleCommandInput, UpdateCrawlerScheduleCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateCrawlerScheduleCommandInput;
    constructor(input: UpdateCrawlerScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCrawlerScheduleCommandInput, UpdateCrawlerScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
