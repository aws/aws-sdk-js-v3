import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSubnetsRequest, DescribeSubnetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSubnetsCommandInput = DescribeSubnetsRequest;
export declare type DescribeSubnetsCommandOutput = DescribeSubnetsResult & __MetadataBearer;
export declare class DescribeSubnetsCommand extends $Command<DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSubnetsCommandInput;
    constructor(input: DescribeSubnetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
