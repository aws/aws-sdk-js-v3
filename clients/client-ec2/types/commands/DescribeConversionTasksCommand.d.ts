import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeConversionTasksRequest, DescribeConversionTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConversionTasksCommandInput = DescribeConversionTasksRequest;
export declare type DescribeConversionTasksCommandOutput = DescribeConversionTasksResult & __MetadataBearer;
export declare class DescribeConversionTasksCommand extends $Command<DescribeConversionTasksCommandInput, DescribeConversionTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeConversionTasksCommandInput;
    constructor(input: DescribeConversionTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConversionTasksCommandInput, DescribeConversionTasksCommandOutput>;
    private serialize;
    private deserialize;
}
