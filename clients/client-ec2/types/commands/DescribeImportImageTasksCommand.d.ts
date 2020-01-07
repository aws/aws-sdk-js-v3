import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImportImageTasksRequest, DescribeImportImageTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImportImageTasksCommandInput = DescribeImportImageTasksRequest;
export declare type DescribeImportImageTasksCommandOutput = DescribeImportImageTasksResult & __MetadataBearer;
export declare class DescribeImportImageTasksCommand extends $Command<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImportImageTasksCommandInput;
    constructor(input: DescribeImportImageTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput>;
    private serialize;
    private deserialize;
}
