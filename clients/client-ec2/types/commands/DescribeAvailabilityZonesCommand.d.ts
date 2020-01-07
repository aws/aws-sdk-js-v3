import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAvailabilityZonesRequest, DescribeAvailabilityZonesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAvailabilityZonesCommandInput = DescribeAvailabilityZonesRequest;
export declare type DescribeAvailabilityZonesCommandOutput = DescribeAvailabilityZonesResult & __MetadataBearer;
export declare class DescribeAvailabilityZonesCommand extends $Command<DescribeAvailabilityZonesCommandInput, DescribeAvailabilityZonesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeAvailabilityZonesCommandInput;
    constructor(input: DescribeAvailabilityZonesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailabilityZonesCommandInput, DescribeAvailabilityZonesCommandOutput>;
    private serialize;
    private deserialize;
}
