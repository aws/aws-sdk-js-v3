import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CopyDBSnapshotMessage, CopyDBSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyDBSnapshotCommandInput = CopyDBSnapshotMessage;
export declare type CopyDBSnapshotCommandOutput = CopyDBSnapshotResult & __MetadataBearer;
export declare class CopyDBSnapshotCommand extends $Command<CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: CopyDBSnapshotCommandInput;
    constructor(input: CopyDBSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyDBSnapshotCommandInput, CopyDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
