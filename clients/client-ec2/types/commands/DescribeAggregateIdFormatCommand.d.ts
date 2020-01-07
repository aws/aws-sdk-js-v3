import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAggregateIdFormatRequest, DescribeAggregateIdFormatResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAggregateIdFormatCommandInput = DescribeAggregateIdFormatRequest;
export declare type DescribeAggregateIdFormatCommandOutput = DescribeAggregateIdFormatResult & __MetadataBearer;
export declare class DescribeAggregateIdFormatCommand extends $Command<DescribeAggregateIdFormatCommandInput, DescribeAggregateIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeAggregateIdFormatCommandInput;
    constructor(input: DescribeAggregateIdFormatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregateIdFormatCommandInput, DescribeAggregateIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
