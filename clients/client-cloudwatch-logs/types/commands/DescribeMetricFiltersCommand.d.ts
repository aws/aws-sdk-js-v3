import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMetricFiltersCommandInput = DescribeMetricFiltersRequest;
export declare type DescribeMetricFiltersCommandOutput = DescribeMetricFiltersResponse & __MetadataBearer;
export declare class DescribeMetricFiltersCommand extends $Command<DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeMetricFiltersCommandInput;
    constructor(input: DescribeMetricFiltersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
