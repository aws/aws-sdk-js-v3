import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceTypesRequest, DescribeInstanceTypesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceTypesCommandInput = DescribeInstanceTypesRequest;
export declare type DescribeInstanceTypesCommandOutput = DescribeInstanceTypesResult & __MetadataBearer;
export declare class DescribeInstanceTypesCommand extends $Command<DescribeInstanceTypesCommandInput, DescribeInstanceTypesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeInstanceTypesCommandInput;
    constructor(input: DescribeInstanceTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceTypesCommandInput, DescribeInstanceTypesCommandOutput>;
    private serialize;
    private deserialize;
}
