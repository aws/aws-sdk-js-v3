import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetCrawlerMetricsRequest, GetCrawlerMetricsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCrawlerMetricsCommandInput = GetCrawlerMetricsRequest;
export declare type GetCrawlerMetricsCommandOutput = GetCrawlerMetricsResponse & __MetadataBearer;
export declare class GetCrawlerMetricsCommand extends $Command<GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetCrawlerMetricsCommandInput;
    constructor(input: GetCrawlerMetricsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
