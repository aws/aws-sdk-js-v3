import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIdFormatRequest, DescribeIdFormatResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIdFormatCommandInput = DescribeIdFormatRequest;
export declare type DescribeIdFormatCommandOutput = DescribeIdFormatResult & __MetadataBearer;
export declare class DescribeIdFormatCommand extends $Command<DescribeIdFormatCommandInput, DescribeIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeIdFormatCommandInput;
    constructor(input: DescribeIdFormatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdFormatCommandInput, DescribeIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
