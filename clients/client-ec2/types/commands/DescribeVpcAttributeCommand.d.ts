import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcAttributeRequest, DescribeVpcAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcAttributeCommandInput = DescribeVpcAttributeRequest;
export declare type DescribeVpcAttributeCommandOutput = DescribeVpcAttributeResult & __MetadataBearer;
export declare class DescribeVpcAttributeCommand extends $Command<DescribeVpcAttributeCommandInput, DescribeVpcAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcAttributeCommandInput;
    constructor(input: DescribeVpcAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcAttributeCommandInput, DescribeVpcAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
