import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSnapshotAttributeRequest, DescribeSnapshotAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotAttributeCommandInput = DescribeSnapshotAttributeRequest;
export declare type DescribeSnapshotAttributeCommandOutput = DescribeSnapshotAttributeResult & __MetadataBearer;
export declare class DescribeSnapshotAttributeCommand extends $Command<DescribeSnapshotAttributeCommandInput, DescribeSnapshotAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSnapshotAttributeCommandInput;
    constructor(input: DescribeSnapshotAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotAttributeCommandInput, DescribeSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
