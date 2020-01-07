import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DescribeApplicationSnapshotRequest, DescribeApplicationSnapshotResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeApplicationSnapshotCommandInput = DescribeApplicationSnapshotRequest;
export declare type DescribeApplicationSnapshotCommandOutput = DescribeApplicationSnapshotResponse & __MetadataBearer;
export declare class DescribeApplicationSnapshotCommand extends $Command<DescribeApplicationSnapshotCommandInput, DescribeApplicationSnapshotCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DescribeApplicationSnapshotCommandInput;
    constructor(input: DescribeApplicationSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeApplicationSnapshotCommandInput, DescribeApplicationSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
