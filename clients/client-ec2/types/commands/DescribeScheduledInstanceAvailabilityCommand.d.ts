import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeScheduledInstanceAvailabilityRequest, DescribeScheduledInstanceAvailabilityResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScheduledInstanceAvailabilityCommandInput = DescribeScheduledInstanceAvailabilityRequest;
export declare type DescribeScheduledInstanceAvailabilityCommandOutput = DescribeScheduledInstanceAvailabilityResult & __MetadataBearer;
export declare class DescribeScheduledInstanceAvailabilityCommand extends $Command<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeScheduledInstanceAvailabilityCommandInput;
    constructor(input: DescribeScheduledInstanceAvailabilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput>;
    private serialize;
    private deserialize;
}
