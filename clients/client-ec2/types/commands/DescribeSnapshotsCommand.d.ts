import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotsCommandInput = DescribeSnapshotsRequest;
export declare type DescribeSnapshotsCommandOutput = DescribeSnapshotsResult & __MetadataBearer;
export declare class DescribeSnapshotsCommand extends $Command<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSnapshotsCommandInput;
    constructor(input: DescribeSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
