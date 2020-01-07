import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImageAttributeRequest, ImageAttribute } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImageAttributeCommandInput = DescribeImageAttributeRequest;
export declare type DescribeImageAttributeCommandOutput = ImageAttribute & __MetadataBearer;
export declare class DescribeImageAttributeCommand extends $Command<DescribeImageAttributeCommandInput, DescribeImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImageAttributeCommandInput;
    constructor(input: DescribeImageAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageAttributeCommandInput, DescribeImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
