import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImagesRequest, DescribeImagesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImagesCommandInput = DescribeImagesRequest;
export declare type DescribeImagesCommandOutput = DescribeImagesResult & __MetadataBearer;
export declare class DescribeImagesCommand extends $Command<DescribeImagesCommandInput, DescribeImagesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImagesCommandInput;
    constructor(input: DescribeImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImagesCommandInput, DescribeImagesCommandOutput>;
    private serialize;
    private deserialize;
}
