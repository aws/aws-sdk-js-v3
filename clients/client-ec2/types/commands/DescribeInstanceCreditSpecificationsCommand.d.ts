import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceCreditSpecificationsRequest, DescribeInstanceCreditSpecificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceCreditSpecificationsCommandInput = DescribeInstanceCreditSpecificationsRequest;
export declare type DescribeInstanceCreditSpecificationsCommandOutput = DescribeInstanceCreditSpecificationsResult & __MetadataBearer;
export declare class DescribeInstanceCreditSpecificationsCommand extends $Command<DescribeInstanceCreditSpecificationsCommandInput, DescribeInstanceCreditSpecificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceCreditSpecificationsCommandInput;
    constructor(input: DescribeInstanceCreditSpecificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceCreditSpecificationsCommandInput, DescribeInstanceCreditSpecificationsCommandOutput>;
    private serialize;
    private deserialize;
}
