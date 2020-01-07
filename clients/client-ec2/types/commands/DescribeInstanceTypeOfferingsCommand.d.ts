import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceTypeOfferingsRequest, DescribeInstanceTypeOfferingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceTypeOfferingsCommandInput = DescribeInstanceTypeOfferingsRequest;
export declare type DescribeInstanceTypeOfferingsCommandOutput = DescribeInstanceTypeOfferingsResult & __MetadataBearer;
export declare class DescribeInstanceTypeOfferingsCommand extends $Command<DescribeInstanceTypeOfferingsCommandInput, DescribeInstanceTypeOfferingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceTypeOfferingsCommandInput;
    constructor(input: DescribeInstanceTypeOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceTypeOfferingsCommandInput, DescribeInstanceTypeOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
