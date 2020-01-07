import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceAttributeRequest, InstanceAttribute } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceAttributeCommandInput = DescribeInstanceAttributeRequest;
export declare type DescribeInstanceAttributeCommandOutput = InstanceAttribute & __MetadataBearer;
export declare class DescribeInstanceAttributeCommand extends $Command<DescribeInstanceAttributeCommandInput, DescribeInstanceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceAttributeCommandInput;
    constructor(input: DescribeInstanceAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceAttributeCommandInput, DescribeInstanceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
