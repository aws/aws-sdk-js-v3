import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CopySnapshotRequest, CopySnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopySnapshotCommandInput = CopySnapshotRequest;
export declare type CopySnapshotCommandOutput = CopySnapshotResult & __MetadataBearer;
export declare class CopySnapshotCommand extends $Command<CopySnapshotCommandInput, CopySnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CopySnapshotCommandInput;
    constructor(input: CopySnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopySnapshotCommandInput, CopySnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
