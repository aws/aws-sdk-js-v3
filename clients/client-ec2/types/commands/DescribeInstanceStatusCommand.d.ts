import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceStatusRequest, DescribeInstanceStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceStatusCommandInput = DescribeInstanceStatusRequest;
export declare type DescribeInstanceStatusCommandOutput = DescribeInstanceStatusResult & __MetadataBearer;
export declare class DescribeInstanceStatusCommand extends $Command<DescribeInstanceStatusCommandInput, DescribeInstanceStatusCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceStatusCommandInput;
    constructor(input: DescribeInstanceStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceStatusCommandInput, DescribeInstanceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
