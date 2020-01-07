import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeUsageReportSubscriptionsRequest, DescribeUsageReportSubscriptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUsageReportSubscriptionsCommandInput = DescribeUsageReportSubscriptionsRequest;
export declare type DescribeUsageReportSubscriptionsCommandOutput = DescribeUsageReportSubscriptionsResult & __MetadataBearer;
export declare class DescribeUsageReportSubscriptionsCommand extends $Command<DescribeUsageReportSubscriptionsCommandInput, DescribeUsageReportSubscriptionsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeUsageReportSubscriptionsCommandInput;
    constructor(input: DescribeUsageReportSubscriptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUsageReportSubscriptionsCommandInput, DescribeUsageReportSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
