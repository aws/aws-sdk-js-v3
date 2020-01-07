import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeKeyPairsRequest, DescribeKeyPairsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeKeyPairsCommandInput = DescribeKeyPairsRequest;
export declare type DescribeKeyPairsCommandOutput = DescribeKeyPairsResult & __MetadataBearer;
export declare class DescribeKeyPairsCommand extends $Command<DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeKeyPairsCommandInput;
    constructor(input: DescribeKeyPairsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput>;
    private serialize;
    private deserialize;
}
