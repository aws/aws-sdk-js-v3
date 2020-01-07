import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeRegionsRequest, DescribeRegionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRegionsCommandInput = DescribeRegionsRequest;
export declare type DescribeRegionsCommandOutput = DescribeRegionsResult & __MetadataBearer;
export declare class DescribeRegionsCommand extends $Command<DescribeRegionsCommandInput, DescribeRegionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeRegionsCommandInput;
    constructor(input: DescribeRegionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRegionsCommandInput, DescribeRegionsCommandOutput>;
    private serialize;
    private deserialize;
}
