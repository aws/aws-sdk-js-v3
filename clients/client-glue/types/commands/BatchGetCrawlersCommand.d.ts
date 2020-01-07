import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetCrawlersRequest, BatchGetCrawlersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetCrawlersCommandInput = BatchGetCrawlersRequest;
export declare type BatchGetCrawlersCommandOutput = BatchGetCrawlersResponse & __MetadataBearer;
export declare class BatchGetCrawlersCommand extends $Command<BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetCrawlersCommandInput;
    constructor(input: BatchGetCrawlersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput>;
    private serialize;
    private deserialize;
}
