import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotPriceHistoryRequest, DescribeSpotPriceHistoryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSpotPriceHistoryCommandInput = DescribeSpotPriceHistoryRequest;
export declare type DescribeSpotPriceHistoryCommandOutput = DescribeSpotPriceHistoryResult & __MetadataBearer;
export declare class DescribeSpotPriceHistoryCommand extends $Command<DescribeSpotPriceHistoryCommandInput, DescribeSpotPriceHistoryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotPriceHistoryCommandInput;
    constructor(input: DescribeSpotPriceHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotPriceHistoryCommandInput, DescribeSpotPriceHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
