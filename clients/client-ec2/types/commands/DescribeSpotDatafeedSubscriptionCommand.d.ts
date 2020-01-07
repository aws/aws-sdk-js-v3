import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotDatafeedSubscriptionRequest, DescribeSpotDatafeedSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSpotDatafeedSubscriptionCommandInput = DescribeSpotDatafeedSubscriptionRequest;
export declare type DescribeSpotDatafeedSubscriptionCommandOutput = DescribeSpotDatafeedSubscriptionResult & __MetadataBearer;
export declare class DescribeSpotDatafeedSubscriptionCommand extends $Command<DescribeSpotDatafeedSubscriptionCommandInput, DescribeSpotDatafeedSubscriptionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSpotDatafeedSubscriptionCommandInput;
    constructor(input: DescribeSpotDatafeedSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSpotDatafeedSubscriptionCommandInput, DescribeSpotDatafeedSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
