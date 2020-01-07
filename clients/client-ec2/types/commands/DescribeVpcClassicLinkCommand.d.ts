import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcClassicLinkRequest, DescribeVpcClassicLinkResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcClassicLinkCommandInput = DescribeVpcClassicLinkRequest;
export declare type DescribeVpcClassicLinkCommandOutput = DescribeVpcClassicLinkResult & __MetadataBearer;
export declare class DescribeVpcClassicLinkCommand extends $Command<DescribeVpcClassicLinkCommandInput, DescribeVpcClassicLinkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcClassicLinkCommandInput;
    constructor(input: DescribeVpcClassicLinkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcClassicLinkCommandInput, DescribeVpcClassicLinkCommandOutput>;
    private serialize;
    private deserialize;
}
