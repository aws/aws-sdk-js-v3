import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeExportImageTasksRequest, DescribeExportImageTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExportImageTasksCommandInput = DescribeExportImageTasksRequest;
export declare type DescribeExportImageTasksCommandOutput = DescribeExportImageTasksResult & __MetadataBearer;
export declare class DescribeExportImageTasksCommand extends $Command<DescribeExportImageTasksCommandInput, DescribeExportImageTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeExportImageTasksCommandInput;
    constructor(input: DescribeExportImageTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportImageTasksCommandInput, DescribeExportImageTasksCommandOutput>;
    private serialize;
    private deserialize;
}
