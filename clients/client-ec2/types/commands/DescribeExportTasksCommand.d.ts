import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeExportTasksRequest, DescribeExportTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExportTasksCommandInput = DescribeExportTasksRequest;
export declare type DescribeExportTasksCommandOutput = DescribeExportTasksResult & __MetadataBearer;
export declare class DescribeExportTasksCommand extends $Command<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeExportTasksCommandInput;
    constructor(input: DescribeExportTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput>;
    private serialize;
    private deserialize;
}
