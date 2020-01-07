import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeSubscriptionFiltersRequest, DescribeSubscriptionFiltersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSubscriptionFiltersCommandInput = DescribeSubscriptionFiltersRequest;
export declare type DescribeSubscriptionFiltersCommandOutput = DescribeSubscriptionFiltersResponse & __MetadataBearer;
export declare class DescribeSubscriptionFiltersCommand extends $Command<DescribeSubscriptionFiltersCommandInput, DescribeSubscriptionFiltersCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeSubscriptionFiltersCommandInput;
    constructor(input: DescribeSubscriptionFiltersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubscriptionFiltersCommandInput, DescribeSubscriptionFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
