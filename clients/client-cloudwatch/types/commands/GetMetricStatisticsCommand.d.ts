import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricStatisticsInput, GetMetricStatisticsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMetricStatisticsCommandInput = GetMetricStatisticsInput;
export declare type GetMetricStatisticsCommandOutput = GetMetricStatisticsOutput & __MetadataBearer;
export declare class GetMetricStatisticsCommand extends $Command<GetMetricStatisticsCommandInput, GetMetricStatisticsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetMetricStatisticsCommandInput;
    constructor(input: GetMetricStatisticsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMetricStatisticsCommandInput, GetMetricStatisticsCommandOutput>;
    private serialize;
    private deserialize;
}
