import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeScheduledInstancesRequest, DescribeScheduledInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScheduledInstancesCommandInput = DescribeScheduledInstancesRequest;
export declare type DescribeScheduledInstancesCommandOutput = DescribeScheduledInstancesResult & __MetadataBearer;
export declare class DescribeScheduledInstancesCommand extends $Command<DescribeScheduledInstancesCommandInput, DescribeScheduledInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeScheduledInstancesCommandInput;
    constructor(input: DescribeScheduledInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledInstancesCommandInput, DescribeScheduledInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
