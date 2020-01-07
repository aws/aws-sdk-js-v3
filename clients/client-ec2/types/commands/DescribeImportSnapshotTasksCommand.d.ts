import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImportSnapshotTasksRequest, DescribeImportSnapshotTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImportSnapshotTasksCommandInput = DescribeImportSnapshotTasksRequest;
export declare type DescribeImportSnapshotTasksCommandOutput = DescribeImportSnapshotTasksResult & __MetadataBearer;
export declare class DescribeImportSnapshotTasksCommand extends $Command<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImportSnapshotTasksCommandInput;
    constructor(input: DescribeImportSnapshotTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput>;
    private serialize;
    private deserialize;
}
