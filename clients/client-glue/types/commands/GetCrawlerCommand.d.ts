import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlerRequest, GetCrawlerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCrawlerCommandInput = GetCrawlerRequest;
export declare type GetCrawlerCommandOutput = GetCrawlerResponse & __MetadataBearer;
export declare class GetCrawlerCommand extends $Command<GetCrawlerCommandInput, GetCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCrawlerCommandInput;
    constructor(input: GetCrawlerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCrawlerCommandInput, GetCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
