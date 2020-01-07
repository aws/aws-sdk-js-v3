import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopySnapshotCommandInput = CopySnapshotRequest;
export declare type CopySnapshotCommandOutput = CopySnapshotResult & __MetadataBearer;
export declare class CopySnapshotCommand extends $Command<CopySnapshotCommandInput, CopySnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CopySnapshotCommandInput;
    constructor(input: CopySnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
