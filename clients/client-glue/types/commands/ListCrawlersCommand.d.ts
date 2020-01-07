import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListCrawlersRequest, ListCrawlersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCrawlersCommandInput = ListCrawlersRequest;
export declare type ListCrawlersCommandOutput = ListCrawlersResponse & __MetadataBearer;
export declare class ListCrawlersCommand extends $Command<ListCrawlersCommandInput, ListCrawlersCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListCrawlersCommandInput;
    constructor(input: ListCrawlersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCrawlersCommandInput, ListCrawlersCommandOutput>;
    private serialize;
    private deserialize;
}
