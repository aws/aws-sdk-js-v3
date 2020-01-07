import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcsRequest, DescribeVpcsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVpcsCommandInput = DescribeVpcsRequest;
export declare type DescribeVpcsCommandOutput = DescribeVpcsResult & __MetadataBearer;
export declare class DescribeVpcsCommand extends $Command<DescribeVpcsCommandInput, DescribeVpcsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpcsCommandInput;
    constructor(input: DescribeVpcsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpcsCommandInput, DescribeVpcsCommandOutput>;
    private serialize;
    private deserialize;
}
