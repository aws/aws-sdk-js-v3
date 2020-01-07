import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCrawlerRequest, CreateCrawlerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCrawlerCommandInput = CreateCrawlerRequest;
export declare type CreateCrawlerCommandOutput = CreateCrawlerResponse & __MetadataBearer;
export declare class CreateCrawlerCommand extends $Command<CreateCrawlerCommandInput, CreateCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateCrawlerCommandInput;
    constructor(input: CreateCrawlerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCrawlerCommandInput, CreateCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
