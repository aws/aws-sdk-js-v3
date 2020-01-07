import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReservedInstancesOfferingsRequest, DescribeReservedInstancesOfferingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedInstancesOfferingsCommandInput = DescribeReservedInstancesOfferingsRequest;
export declare type DescribeReservedInstancesOfferingsCommandOutput = DescribeReservedInstancesOfferingsResult & __MetadataBearer;
export declare class DescribeReservedInstancesOfferingsCommand extends $Command<DescribeReservedInstancesOfferingsCommandInput, DescribeReservedInstancesOfferingsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeReservedInstancesOfferingsCommandInput;
    constructor(input: DescribeReservedInstancesOfferingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedInstancesOfferingsCommandInput, DescribeReservedInstancesOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
