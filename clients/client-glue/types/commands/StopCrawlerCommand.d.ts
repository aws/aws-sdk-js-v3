import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopCrawlerRequest, StopCrawlerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopCrawlerCommandInput = StopCrawlerRequest;
export declare type StopCrawlerCommandOutput = StopCrawlerResponse & __MetadataBearer;
export declare class StopCrawlerCommand extends $Command<StopCrawlerCommandInput, StopCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StopCrawlerCommandInput;
    constructor(input: StopCrawlerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopCrawlerCommandInput, StopCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
