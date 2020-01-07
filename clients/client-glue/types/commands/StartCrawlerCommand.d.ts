import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartCrawlerRequest, StartCrawlerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartCrawlerCommandInput = StartCrawlerRequest;
export declare type StartCrawlerCommandOutput = StartCrawlerResponse & __MetadataBearer;
export declare class StartCrawlerCommand extends $Command<StartCrawlerCommandInput, StartCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartCrawlerCommandInput;
    constructor(input: StartCrawlerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartCrawlerCommandInput, StartCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
