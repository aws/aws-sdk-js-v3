import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcClassicLinkDnsSupportRequest, DescribeVpcClassicLinkDnsSupportResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcClassicLinkDnsSupportCommandInput = DescribeVpcClassicLinkDnsSupportRequest;
export declare type DescribeVpcClassicLinkDnsSupportCommandOutput = DescribeVpcClassicLinkDnsSupportResult & __MetadataBearer;
export declare class DescribeVpcClassicLinkDnsSupportCommand extends $Command<DescribeVpcClassicLinkDnsSupportCommandInput, DescribeVpcClassicLinkDnsSupportCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcClassicLinkDnsSupportCommandInput;
    constructor(input: DescribeVpcClassicLinkDnsSupportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcClassicLinkDnsSupportCommandInput, DescribeVpcClassicLinkDnsSupportCommandOutput>;
    private serialize;
    private deserialize;
}
