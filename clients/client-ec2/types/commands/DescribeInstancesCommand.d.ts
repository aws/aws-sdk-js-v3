import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstancesRequest, DescribeInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancesCommandInput = DescribeInstancesRequest;
export declare type DescribeInstancesCommandOutput = DescribeInstancesResult & __MetadataBearer;
export declare class DescribeInstancesCommand extends $Command<DescribeInstancesCommandInput, DescribeInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstancesCommandInput;
    constructor(input: DescribeInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
