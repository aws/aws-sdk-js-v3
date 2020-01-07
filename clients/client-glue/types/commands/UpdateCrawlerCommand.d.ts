import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateCrawlerRequest, UpdateCrawlerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCrawlerCommandInput = UpdateCrawlerRequest;
export declare type UpdateCrawlerCommandOutput = UpdateCrawlerResponse & __MetadataBearer;
export declare class UpdateCrawlerCommand extends $Command<UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateCrawlerCommandInput;
    constructor(input: UpdateCrawlerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
