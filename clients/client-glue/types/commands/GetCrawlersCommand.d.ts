import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlersRequest, GetCrawlersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCrawlersCommandInput = GetCrawlersRequest;
export declare type GetCrawlersCommandOutput = GetCrawlersResponse & __MetadataBearer;
export declare class GetCrawlersCommand extends $Command<GetCrawlersCommandInput, GetCrawlersCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCrawlersCommandInput;
    constructor(input: GetCrawlersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCrawlersCommandInput, GetCrawlersCommandOutput>;
    private serialize;
    private deserialize;
}
