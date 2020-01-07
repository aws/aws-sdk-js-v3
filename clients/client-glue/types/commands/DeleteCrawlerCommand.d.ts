import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteCrawlerRequest, DeleteCrawlerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCrawlerCommandInput = DeleteCrawlerRequest;
export declare type DeleteCrawlerCommandOutput = DeleteCrawlerResponse & __MetadataBearer;
export declare class DeleteCrawlerCommand extends $Command<DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteCrawlerCommandInput;
    constructor(input: DeleteCrawlerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput>;
    private serialize;
    private deserialize;
}
