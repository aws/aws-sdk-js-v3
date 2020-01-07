import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportSnapshotRequest, ImportSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportSnapshotCommandInput = ImportSnapshotRequest;
export declare type ImportSnapshotCommandOutput = ImportSnapshotResult & __MetadataBearer;
export declare class ImportSnapshotCommand extends $Command<ImportSnapshotCommandInput, ImportSnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportSnapshotCommandInput;
    constructor(input: ImportSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportSnapshotCommandInput, ImportSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
