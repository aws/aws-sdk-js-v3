import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ExportSnapshotRequest, ExportSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportSnapshotCommandInput = ExportSnapshotRequest;
export declare type ExportSnapshotCommandOutput = ExportSnapshotResult & __MetadataBearer;
export declare class ExportSnapshotCommand extends $Command<ExportSnapshotCommandInput, ExportSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: ExportSnapshotCommandInput;
    constructor(input: ExportSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportSnapshotCommandInput, ExportSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
