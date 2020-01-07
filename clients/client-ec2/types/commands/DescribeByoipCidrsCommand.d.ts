import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeByoipCidrsRequest, DescribeByoipCidrsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeByoipCidrsCommandInput = DescribeByoipCidrsRequest;
export declare type DescribeByoipCidrsCommandOutput = DescribeByoipCidrsResult & __MetadataBearer;
export declare class DescribeByoipCidrsCommand extends $Command<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeByoipCidrsCommandInput;
    constructor(input: DescribeByoipCidrsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeByoipCidrsCommandInput, DescribeByoipCidrsCommandOutput>;
    private serialize;
    private deserialize;
}
